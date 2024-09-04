import { PayloadAction } from "@reduxjs/toolkit";

import { Metric } from "../../hierarchy-metric-client";
import { AddMetricNodesState } from "../types";

export const addMetricNodesAction = (
	state: AddMetricNodesState,
	{ payload }: PayloadAction<Metric[]>,
) => {
	state.metrics = [...payload];
};

export const removeFirstMetricNodeAction = (state: AddMetricNodesState) => {
	state.metrics = state.metrics.slice(1);
};

export const removeMetricNodesAction = (state: AddMetricNodesState) => {
	state.metrics = [];
};
