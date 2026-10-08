/* eslint-disable */
// HTTP-сервер заглушки бэкенда «Иерархии метрик». Логика запросов — в api.js.
// Состояние хранится в mock-backend/db.json; удалите файл, чтобы вернуть начальные данные.
const fs = require("fs");
const http = require("http");
const path = require("path");
const { createMockApi, createSeedDb } = require("./api");

const PORT = Number(process.env.MOCK_PORT ?? 3008);
const DB_FILE = path.join(__dirname, "db.json");

const db = fs.existsSync(DB_FILE) ? JSON.parse(fs.readFileSync(DB_FILE, "utf8")) : createSeedDb();
const saveDb = () => fs.writeFileSync(DB_FILE, JSON.stringify(db, null, 2));
saveDb();

const api = createMockApi(db, saveDb);

const readBody = (req) =>
	new Promise((resolve) => {
		let data = "";
		req.on("data", (chunk) => (data += chunk));
		req.on("end", () => {
			try {
				resolve(data ? JSON.parse(data) : {});
			} catch {
				resolve({});
			}
		});
	});

const send = (res, status, body) => {
	res.writeHead(status, { "Content-Type": "application/json; charset=utf-8" });
	res.end(JSON.stringify(body));
};

http
	.createServer(async (req, res) => {
		res.setHeader("Access-Control-Allow-Origin", "*");
		res.setHeader("Access-Control-Allow-Methods", "GET,POST,PUT,DELETE,OPTIONS");
		res.setHeader("Access-Control-Allow-Headers", "*");
		if (req.method === "OPTIONS") {
			res.writeHead(204);
			return res.end();
		}
		try {
			const url = new URL(req.url, `http://${req.headers.host}`);
			const { status, body } = api.handle(req.method, url, await readBody(req));
			send(res, status, body);
		} catch (e) {
			console.error(e);
			send(res, 500, { error: String(e) });
		}
		console.log(`${req.method} ${req.url} -> ${res.statusCode}`);
	})
	.listen(PORT, () => console.log(`Mock backend: http://localhost:${PORT}`));
