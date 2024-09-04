import { GlobalMenuState } from "../types";

export const openGlobalMenuAction = (state: GlobalMenuState) => {
	state.isOpen = true;
};

export const closeGlobalMenuAction = (state: GlobalMenuState) => {
	state.isOpen = false;
};

export const toggleGlobalMenuAction = (state: GlobalMenuState) => {
	if (state.isOpen) state.isOpen = false;
	else state.isOpen = true;
};
