/* eslint-disable */
// Логика заглушки бэкенда «Иерархии метрик» по контракту src/hierarchy-metric-client.
// Не зависит от Node: используется и сервером (server.js), и демо-режимом в браузере.
const seed = require("./seed");

const createSeedDb = () => JSON.parse(JSON.stringify(seed));

const createMockApi = (db, saveDb) => {
	const d = db.dictionaries;
	const byId = (list, id) => (id == null ? null : list.find((item) => item.id === Number(id)) ?? null);
	const toMetricUser = (user) => (user ? { id: user.id, name: user.name, username: user.username } : null);
	const toGraphShort = (graph) => ({
		id: graph.id,
		name: graph.name,
		author: toMetricUser(byId(d.users, graph.authorId)),
	});

	const toMetricShort = (m) => ({
		id: m.id,
		name: m.name,
		value: m.value,
		dynamics: m.dynamics,
		valuePostfix: m.valuePostfix,
		domain: byId(d.domains, m.domainId),
		status: byId(d.statuses, m.statusId),
		owner: toMetricUser(byId(d.users, m.ownerId)),
	});

	const toMetric = (m) => ({
		id: m.id,
		name: m.name,
		state: m.state,
		label: m.label,
		level: byId(d.levels, m.levelId),
		platform: byId(d.platforms, m.platformId),
		product: byId(d.products, m.productId),
		attractionChannel: byId(d.attractionChannels, m.attractionChannelId),
		type: byId(d.types, m.typeId),
		rank: byId(d.types, m.rankId) ?? {},
		value: m.value,
		dynamics: m.dynamics,
		valuePostfix: m.valuePostfix,
		description: m.description,
		status: byId(d.statuses, m.statusId),
		nameCalculation: m.nameCalculation,
		granularities: (m.granularitiesIds ?? []).map((id) => byId(d.granularities, id)).filter(Boolean),
		dimensions: (m.dimensionsIds ?? []).map((id) => byId(d.dimensions, id)).filter(Boolean),
		dataSource: m.dataSource,
		refToBoard: m.refToBoard,
		queryExample: m.queryExample,
		owner: toMetricUser(byId(d.users, m.ownerId)),
		analyst: toMetricUser(byId(d.users, m.analystId)),
		domain: byId(d.domains, m.domainId),
		graphs: db.graphs.filter((g) => g.nodes.some((n) => n.metricId === m.id)).map(toGraphShort),
	});

	const toGraph = (g) => ({
		...toGraphShort(g),
		nodes: g.nodes
			.map((n) => {
				const metric = db.metrics.find((m) => m.id === n.metricId);
				if (!metric) return null;
				return {
					id: n.id,
					metric: toMetricShort(metric),
					coordinates: n.coordinates ?? { x: null, y: null },
					relations: n.relations ?? [],
				};
			})
			.filter(Boolean),
	});

	const METRIC_FIELDS = [
		"name", "state", "typeId", "rankId", "levelId", "platformId", "productId", "attractionChannelId",
		"valuePostfix", "description", "statusId", "nameCalculation", "label", "granularitiesIds",
		"dimensionsIds", "dataSource", "refToBoard", "queryExample", "ownerId", "analystId", "domainId",
	];
	const applyMetricFields = (target, body) => {
		METRIC_FIELDS.forEach((field) => {
			if (body[field] !== undefined) target[field] = body[field];
		});
		return target;
	};

	const filterMetrics = (query) => {
		const text = (field) => (m) => !query.get(field) || String(m[field] ?? "").toLowerCase().includes(query.get(field).toLowerCase());
		const ids = (param, getValue) => (m) => {
			const raw = query.get(param);
			if (!raw) return true;
			const wanted = raw.split(",").filter(Boolean);
			const value = getValue(m);
			return Array.isArray(value) ? value.some((v) => wanted.includes(String(v))) : wanted.includes(String(value));
		};
		const graphIdsOf = (m) => db.graphs.filter((g) => g.nodes.some((n) => n.metricId === m.id)).map((g) => g.id);
		const filters = [
			text("name"), text("description"), text("label"), text("dataSource"),
			ids("typeIds", (m) => m.typeId), ids("rankIds", (m) => m.rankId), ids("domainIds", (m) => m.domainId),
			ids("ownerIds", (m) => m.ownerId), ids("graphIds", graphIdsOf), ids("levelIds", (m) => m.levelId),
			ids("platformIds", (m) => m.platformId), ids("productIds", (m) => m.productId),
			ids("attractionChannelIds", (m) => m.attractionChannelId),
		];
		return db.metrics.filter((m) => filters.every((f) => f(m)));
	};

	// Детерминированный ряд: последняя точка равна текущему значению метрики,
	// а общий тренд за период соответствует её динамике.
	const getMetricValues = (metric, days) => {
		let seed = metric.id * 9973;
		const random = () => {
			seed = (seed * 16807) % 2147483647;
			return seed / 2147483647;
		};
		const last = Number(metric.value) || 0;
		const first = last / (1 + (Number(metric.dynamics) || 0) / 100);
		const isFractional = !Number.isInteger(last);
		const today = new Date();
		return Array.from({ length: days }, (_, i) => {
			const progress = days === 1 ? 1 : i / (days - 1);
			const trend = first + (last - first) * progress;
			const noise = i === days - 1 ? 0 : (random() - 0.5) * 0.12 * (Math.abs(trend) || 1);
			const date = new Date(today);
			date.setDate(today.getDate() - (days - 1 - i));
			const value = trend + noise;
			return {
				date: date.toISOString().slice(0, 10),
				value: isFractional ? Math.round(value * 100) / 100 : Math.round(value),
			};
		});
	};

	const reply = (status, body) => ({ status, body });
	const notFound = (what) => reply(404, { error: `${what} не найден(а)` });

	const dictionaryRoutes = {
		"/attraction-channels": () => d.attractionChannels,
		"/dimensions": () => d.dimensions,
		"/domains": () => d.domains,
		"/granularities": () => d.granularities,
		"/levels": () => d.levels,
		"/platforms": () => d.platforms,
		"/product": () => d.products,
		"/statuses": () => d.statuses,
		"/types": () => d.types,
		"/roles": () => d.roles,
	};

	// url — объект URL, body — уже разобранный JSON. Возвращает { status, body }.
	const handle = (method, url, body = {}) => {
		const { pathname } = url;

		if (method === "GET" && dictionaryRoutes[pathname]) return reply(200, dictionaryRoutes[pathname]());

		if (method === "GET" && pathname === "/users") {
			const role = url.searchParams.get("role");
			return reply(200, d.users.filter((u) => !role || u.roles.includes(role)));
		}

		if (pathname === "/metrics") {
			if (method === "GET") return reply(200, filterMetrics(url.searchParams).map(toMetric));
			if (method === "POST") {
				if (!body.name) return reply(400, { name: ["Обязательное поле"] });
				const id = Math.max(0, ...db.metrics.map((m) => m.id)) + 1;
				const metric = applyMetricFields({ id, value: 0, dynamics: 0, state: "создана" }, body);
				db.metrics.push(metric);
				saveDb();
				return reply(201, toMetric(metric));
			}
		}

		const valuesMatch = pathname.match(/^\/metrics\/(\d+)\/values$/);
		if (method === "GET" && valuesMatch) {
			const metric = db.metrics.find((m) => m.id === Number(valuesMatch[1]));
			if (!metric) return notFound("Метрика");
			const days = Math.min(Number(url.searchParams.get("days") ?? 30), 365);
			return reply(200, getMetricValues(metric, days));
		}

		const metricMatch = pathname.match(/^\/metrics\/(\d+)$/);
		if (metricMatch) {
			const metric = db.metrics.find((m) => m.id === Number(metricMatch[1]));
			if (!metric) return notFound("Метрика");
			if (method === "GET") return reply(200, toMetric(metric));
			if (method === "PUT") {
				if (body.name === "") return reply(400, { name: ["Обязательное поле"] });
				applyMetricFields(metric, body);
				saveDb();
				return reply(200, toMetric(metric));
			}
			if (method === "DELETE") {
				db.metrics = db.metrics.filter((m) => m !== metric);
				db.graphs.forEach((g) => {
					const removed = new Set(g.nodes.filter((n) => n.metricId === metric.id).map((n) => n.id));
					g.nodes = g.nodes.filter((n) => !removed.has(n.id));
					g.nodes.forEach((n) => {
						n.relations = (n.relations ?? []).filter((r) => !removed.has(r.fromNode) && !removed.has(r.toNode));
					});
				});
				saveDb();
				return reply(202, { message: "Метрика удалена" });
			}
		}

		if (method === "GET" && pathname === "/graphs") return reply(200, db.graphs.map(toGraphShort));

		const graphMatch = pathname.match(/^\/graphs\/([^/]+)$/);
		if (graphMatch) {
			const graphId = decodeURIComponent(graphMatch[1]);
			const graph = db.graphs.find((g) => g.id === graphId);
			if (method === "GET") return graph ? reply(200, toGraph(graph)) : notFound("Граф");
			if (method === "PUT") {
				const target = graph ?? { id: graphId, name: "", authorId: null, nodes: [] };
				if (body.name !== undefined) target.name = body.name;
				if (!target.name) return reply(400, { name: ["Обязательное поле"] });
				if (body.authorId !== undefined) target.authorId = body.authorId;
				if (body.nodes !== undefined) target.nodes = body.nodes;
				if (!graph) db.graphs.push(target);
				saveDb();
				return reply(graph ? 200 : 201, toGraph(target));
			}
			if (method === "DELETE") {
				if (!graph) return notFound("Граф");
				db.graphs = db.graphs.filter((g) => g !== graph);
				saveDb();
				return reply(200, { message: "Граф удалён" });
			}
		}

		return reply(404, { error: `Нет обработчика для ${method} ${pathname}` });
	};

	return { handle };
};

module.exports = { createMockApi, createSeedDb };
