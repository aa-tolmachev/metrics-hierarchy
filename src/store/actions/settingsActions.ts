import { PayloadAction } from "@reduxjs/toolkit";

import { SettingsState } from "../types";

export const setSettingsAction = (
	state: SettingsState,
	{ payload }: PayloadAction<Partial<SettingsState>>,
) => {
	Object.assign(state, payload);
};
