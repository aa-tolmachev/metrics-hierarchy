import { createSlice } from "@reduxjs/toolkit";

import { DEFAULT_SETTINGS } from "../../utils/settingsStorage";
import { setSettingsAction } from "../actions/settingsActions";
import { SettingsState } from "../types";

// Сохранённые значения подгружаются после монтирования (MenuLayout),
// чтобы статическая разметка совпадала с первой отрисовкой на клиенте.
const initialState: SettingsState = DEFAULT_SETTINGS;

export const settingsSlice = createSlice({
	name: "settings",
	initialState,
	reducers: {
		setSettings: setSettingsAction,
	},
});

export const { setSettings } = settingsSlice.actions;

export const settingsReducer = settingsSlice.reducer;
