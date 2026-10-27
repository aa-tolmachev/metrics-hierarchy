import type { SettingsState } from "../store/types";

// Ключ без префикса «metrics-hierarchy:», чтобы сброс демо-данных не стирал настройки.
const SETTINGS_KEY = "metrics-hierarchy-settings";

export const DEFAULT_SETTINGS: SettingsState = {
	highlightDynamics: true,
	dynamicsThreshold: 10,
};

export const loadSettings = (): SettingsState => {
	if (typeof window === "undefined") return DEFAULT_SETTINGS;
	try {
		const saved = JSON.parse(localStorage.getItem(SETTINGS_KEY) ?? "{}");
		return {
			highlightDynamics:
				typeof saved.highlightDynamics === "boolean"
					? saved.highlightDynamics
					: DEFAULT_SETTINGS.highlightDynamics,
			dynamicsThreshold:
				typeof saved.dynamicsThreshold === "number" &&
				saved.dynamicsThreshold >= 0
					? saved.dynamicsThreshold
					: DEFAULT_SETTINGS.dynamicsThreshold,
		};
	} catch {
		return DEFAULT_SETTINGS;
	}
};

export const saveSettings = (settings: SettingsState) => {
	if (typeof window === "undefined") return;
	try {
		localStorage.setItem(SETTINGS_KEY, JSON.stringify(settings));
	} catch {
		// Запрет хранилища не должен ломать работу приложения.
	}
};

export type DynamicsHighlight = "positive" | "negative";

/** Значимое изменение — когда модуль динамики достигает порога. */
export const getDynamicsHighlight = (
	dynamics: number | undefined | null,
	settings: SettingsState,
): DynamicsHighlight | undefined => {
	if (!settings.highlightDynamics || !dynamics) return undefined;
	if (dynamics >= settings.dynamicsThreshold) return "positive";
	if (dynamics <= -settings.dynamicsThreshold) return "negative";
	return undefined;
};
