import { createSlice } from "@reduxjs/toolkit";

import {
	addMetricGraphAuthorIdAction,
	addMetricGraphDataAction,
	addMetricGraphNameAction,
	removeMetricGraphAction,
} from "../actions/metricGraphActions";
import { MetricGraphState } from "../types";

const initialState: MetricGraphState = {};

export const metricGraphSlice = createSlice({
	name: "metricGraph",
	initialState,
	reducers: {
		addMetricGraphData: addMetricGraphDataAction,
		addMetricGraphName: addMetricGraphNameAction,
		addMetricGraphAuthorId: addMetricGraphAuthorIdAction,
		removeMetricGraph: removeMetricGraphAction,
	},
});

export const {
	addMetricGraphData,
	addMetricGraphName,
	addMetricGraphAuthorId,
	removeMetricGraph,
} = metricGraphSlice.actions;

export const metricGraphReducer = metricGraphSlice.reducer;
