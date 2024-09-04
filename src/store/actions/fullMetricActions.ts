import { PayloadAction } from "@reduxjs/toolkit";

import { Metric } from "../../hierarchy-metric-client";
import { FullMetricState, PerformMetricAction } from "../types";

export const updateFullMetricStateAction = (
	state: FullMetricState,
	{ payload }: PayloadAction<PerformMetricAction>,
) => {
	state.state = payload;
};

export const updateFullMetricUsedMetricAction = (
	state: FullMetricState,
	{ payload }: PayloadAction<Metric>,
) => {
	state.usedMetric = { ...payload };
};

export const removeFullMetricAction = (state: FullMetricState) => {
	state.usedMetric = undefined;
	state.state = undefined;
};
