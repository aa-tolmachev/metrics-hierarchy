import { MockDb, createMockApi, createSeedDb } from "../../../mock-backend/api";

export const DEMO_BACKEND_ORIGIN = "https://demo-backend.metrics-hierarchy";

const DB_STORAGE_KEY = "metrics-hierarchy:demo-db";
const STORAGE_PREFIX = "metrics-hierarchy:";
const SEED_VERSION_KEY = "metrics-hierarchy:demo-seed-version";
// Увеличьте при изменении mock-backend/seed.js, чтобы сбросить сохранённые у посетителей данные
const SEED_VERSION = "2";

const clearDemoStorage = () =>
	Object.keys(localStorage)
		.filter((key) => key.startsWith(STORAGE_PREFIX))
		.forEach((key) => localStorage.removeItem(key));

const loadDb = (): MockDb => {
	try {
		if (localStorage.getItem(SEED_VERSION_KEY) !== SEED_VERSION) {
			clearDemoStorage();
			localStorage.setItem(SEED_VERSION_KEY, SEED_VERSION);
		}
		const saved = localStorage.getItem(DB_STORAGE_KEY);
		if (saved) return JSON.parse(saved);
	} catch {
		// повреждённые данные — начинаем с исходных
	}
	return createSeedDb();
};

let installed = false;

export const installDemoBackend = () => {
	if (installed || typeof window === "undefined") return;
	installed = true;

	const db = loadDb();
	const api = createMockApi(db, () =>
		localStorage.setItem(DB_STORAGE_KEY, JSON.stringify(db)),
	);
	const originalFetch = window.fetch.bind(window);

	window.fetch = async (input, init) => {
		const rawUrl =
			typeof input === "string"
				? input
				: input instanceof URL
					? input.href
					: input.url;
		const url = new URL(rawUrl, window.location.href);
		if (url.origin !== DEMO_BACKEND_ORIGIN)
			return originalFetch(input, init);

		const method = (
			init?.method ?? (input instanceof Request ? input.method : "GET")
		).toUpperCase();
		const body =
			typeof init?.body === "string" && init.body
				? JSON.parse(init.body)
				: {};
		const result = api.handle(method, url, body);

		return new Response(JSON.stringify(result.body), {
			status: result.status,
			headers: { "Content-Type": "application/json" },
		});
	};
};

export const resetDemoData = () => {
	clearDemoStorage();
	window.location.reload();
};
