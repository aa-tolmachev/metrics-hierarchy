import { PayloadAction } from "@reduxjs/toolkit";

import { MetricGraphState } from "../types";

export const addMetricGraphDataAction = (
	state: MetricGraphState,
	{ payload }: PayloadAction<any>,
) => {
	state.data = payload;
};

export const addMetricGraphNameAction = (
	state: MetricGraphState,
	{ payload }: PayloadAction<string>,
) => {
	state.name = payload;
};

export const addMetricGraphAuthorIdAction = (
	state: MetricGraphState,
	{ payload }: PayloadAction<number>,
) => {
	state.authorId = payload;
};

export const removeMetricGraphAction = (state: MetricGraphState) => {
	state.name = undefined;
	state.authorId = undefined;
	state.data = undefined;
};
