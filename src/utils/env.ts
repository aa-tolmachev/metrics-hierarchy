/* eslint-disable no-underscore-dangle */
import { from } from "env-var";

type PublicEnv = Record<string, string | undefined>;
declare global {
	interface Window {
		__NEXT_ENV?: PublicEnv;
	}
}

/**
 * Работа с env переменными (node/browser)
 *
 * https://www.npmjs.com/package/env-var
 *
 * в браузере будут доступны переменные с префиксом "NEXT_PUBLIC_"
 *
 * @example
 * import { env } from "utils";
 *
 * // Метод провалидирует переменную и вернет ссылку на userway.
 * // Если NEXT_PUBLIC_USERWAY_URL не задан или не является ссылкой, выбросит исключение
 * const userwayUrl = env().get("NEXT_PUBLIC_USERWAY_URL").required().asUrlString()
 */
export function env() {
	if (typeof window !== "undefined") {
		let vars = window.__NEXT_ENV;
		if (vars === undefined) {
			vars = {};
		}
		return from(vars as any);
	} else {
		return from(process.env);
	}
}

export function getPublicEnv(): PublicEnv {
	const filteredEntries = Object.entries(process.env).filter(([key]) =>
		key.startsWith("NEXT_PUBLIC_"),
	);
	return Object.fromEntries(filteredEntries);
}

export function getEnvJS() {
	const publicEnv = getPublicEnv();
	return `var __NEXT_ENV = ${JSON.stringify(publicEnv)}`;
}
