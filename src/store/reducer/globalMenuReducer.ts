import { createSlice } from "@reduxjs/toolkit";

import {
	closeGlobalMenuAction,
	openGlobalMenuAction,
	toggleGlobalMenuAction,
} from "../actions/globalMenuActions";
import { GlobalMenuState } from "../types";

const initialState: GlobalMenuState = {
	isOpen: false,
};

export const globalMenuSlice = createSlice({
	name: "globalMenu",
	initialState,
	reducers: {
		openGlobalMenu: openGlobalMenuAction,
		closeGlobalMenu: closeGlobalMenuAction,
		toggleGlobalMenu: toggleGlobalMenuAction,
	},
});

export const { openGlobalMenu, closeGlobalMenu, toggleGlobalMenu } =
	globalMenuSlice.actions;

export const globalMenuReducer = globalMenuSlice.reducer;
