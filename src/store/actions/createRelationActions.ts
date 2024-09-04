import { PayloadAction } from "@reduxjs/toolkit";

import { RelationsTypeConnectionEnum } from "../../hierarchy-metric-client";
import { CreateRelationState } from "../types";

export const addCreateRelationAction = (
	state: CreateRelationState,
	{ payload }: PayloadAction<RelationsTypeConnectionEnum>,
) => {
	state.typeConnection = payload;
};

export const removeCreateRelationAction = (state: CreateRelationState) => {
	state.typeConnection = undefined;
};
