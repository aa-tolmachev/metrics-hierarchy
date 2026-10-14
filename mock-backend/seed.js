const dictionaries = {
	domains: [
		{ id: 1, name: "Привлечение", color: "4F8EF7" },
		{ id: 2, name: "Вовлечение", color: "34C38F" },
		{ id: 3, name: "Монетизация", color: "F1B44C" },
	],
	types: [
		{ id: 1, name: "Целевая метрика" },
		{ id: 2, name: "proxy-метрика" },
		{ id: 3, name: "guardrail-метрика" },
	],
	statuses: [
		{ id: 1, name: "Активна" },
		{ id: 2, name: "Не активна" },
	],
	levels: [
		{ id: 1, name: "Компания" },
		{ id: 2, name: "Продукт" },
		{ id: 3, name: "Команда" },
	],
	platforms: [
		{ id: 1, name: "Web" },
		{ id: 2, name: "iOS" },
		{ id: 3, name: "Android" },
		{ id: 4, name: "Все платформы" },
	],
	products: [{ id: 1, name: "Онлайн-магазин" }],
	attractionChannels: [
		{ id: 1, name: "Органика" },
		{ id: 2, name: "Платный трафик" },
		{ id: 3, name: "Реферальная программа" },
	],
	granularities: [
		{ id: 1, name: "День" },
		{ id: 2, name: "Неделя" },
		{ id: 3, name: "Месяц" },
	],
	dimensions: [
		{ id: 1, name: "Платформа" },
		{ id: 2, name: "Канал привлечения" },
		{ id: 3, name: "Новый / старый клиент" },
	],
	roles: [
		{ id: 1, role: "Owner" },
		{ id: 2, role: "Analyst" },
	],
	users: [
		{ id: 1, name: "Иван Петров", username: "ipetrov", roles: ["Owner"] },
		{ id: 2, name: "Мария Смирнова", username: "msmirnova", roles: ["Owner", "Analyst"] },
		{ id: 3, name: "Алексей Кузнецов", username: "akuznetsov", roles: ["Analyst"] },
	],
};

// Воронка пользователя: привлечение → вовлечение → заказы → выручка → маржа.
// Название — классическое короткое обозначение, расшифровка на русском — в описании.
// [domainId, typeId, levelId, name, title, value, dynamics, postfix, methodology, table]
const rawMetrics = [
	[3, 1, 1, "Margin", "Маржа", 18.6, 4.2, "млн ₽", "GMV × комиссия − себестоимость заказов − маркетинговые расходы", "finance.orders"],
	[3, 1, 1, "GMV", "Оборот", 124.5, 6.1, "млн ₽", "Сумма стоимости всех оплаченных заказов за период", "finance.orders"],
	[3, 2, 2, "LTV", "Пожизненная ценность клиента", 7850, 3.4, "₽", "Средняя маржа с клиента за всё время его жизни", "finance.customers"],
	[1, 3, 2, "CAC", "Стоимость привлечения клиента", 1240, -2.8, "₽", "Маркетинговые расходы / кол-во новых клиентов", "marketing.spend"],
	[3, 2, 2, "Orders", "Кол-во заказов", 38900, 5.3, "шт", "Кол-во оплаченных заказов за период", "sales.orders"],
	[3, 2, 3, "AOV", "Средний чек", 3200, 0.8, "₽", "GMV / кол-во заказов", "sales.orders"],
	[2, 2, 2, "DAU", "Ежедневная аудитория", 52300, 2.9, "чел", "Кол-во уникальных пользователей, заходивших в продукт за день", "events.sessions"],
	[2, 2, 3, "CR", "Конверсия в заказ", 2.5, 0.3, "%", "Пользователи с заказом / все активные пользователи", "events.sessions"],
	[1, 2, 3, "New clients", "Новые клиенты", 8400, 7.5, "чел", "Кол-во пользователей, совершивших первый заказ за период", "sales.customers"],
	[1, 2, 3, "CTR", "Кликабельность рекламы", 3.1, 0.4, "%", "Клики по рекламе / показы рекламы", "marketing.ads"],
];

const pick = (list, i) => list[i % list.length];

const metrics = rawMetrics.map(([domainId, typeId, levelId, name, title, value, dynamics, valuePostfix, methodology, table], i) => {
	const id = i + 1;
	const [schema, tableName] = table.split(".");
	const slug = name.toLowerCase().replace(/[^a-z0-9]+/g, "-");
	return {
		id,
		name,
		state: "создана",
		label: name,
		levelId,
		platformId: 4,
		productId: 1,
		attractionChannelId: domainId === 1 ? 2 : null,
		typeId,
		rankId: typeId,
		value,
		dynamics,
		valuePostfix,
		description: `<p><b>${title}.</b> ${methodology}</p>`,
		statusId: 1,
		nameCalculation: methodology,
		granularitiesIds: [1, 2, 3],
		dimensionsIds: domainId === 1 ? [1, 2] : [1, 3],
		dataSource: `dwh.${table}`,
		refToBoard: `https://datalens.example.com/dashboards/${slug}`,
		refToDocs: `https://confluence.example.com/display/METRICS/${slug}`,
		queryExample: `SELECT\n    toDate(created_at) AS day,\n    count(*) AS value\nFROM ${schema}.${tableName}\nWHERE created_at >= today() - 30\nGROUP BY day\nORDER BY day`,
		ownerId: pick([1, 2], i),
		analystId: 3,
		domainId,
	};
});

const node = (metricId, x, y, relations = []) => ({
	id: `node-${metricId}`,
	metricId,
	coordinates: { x: Math.round(x * 0.35), y: Math.round(y * 0.3) },
	relations: relations.map(([to, type]) => ({
		id: `rel-${metricId}-${to}`,
		fromNode: `node-${metricId}`,
		toNode: `node-${to}`,
		typeConnection: type,
	})),
});

// Связь идёт от метрики-драйвера к метрике, на которую она влияет:
// hard — входит в формулу, soft — влияет косвенно.
const graphs = [
	{
		id: "11111111-1111-4111-8111-111111111111",
		name: "Воронка: от привлечения до маржи",
		authorId: 1,
		nodes: [
			node(1, 0, -900),
			node(3, -800, -500, [[1, "soft"]]),
			node(2, 0, -500, [[1, "hard"]]),
			node(4, 1000, -500, [[1, "hard"]]),
			node(6, -400, -100, [[2, "hard"], [3, "soft"]]),
			node(5, 400, -100, [[2, "hard"]]),
			node(8, 0, 300, [[5, "hard"]]),
			node(7, 600, 300, [[5, "hard"]]),
			node(9, 1000, 700, [[7, "hard"], [4, "hard"]]),
			node(10, 1000, 1100, [[9, "soft"]]),
		],
	},
];

module.exports = { dictionaries, metrics, graphs };
