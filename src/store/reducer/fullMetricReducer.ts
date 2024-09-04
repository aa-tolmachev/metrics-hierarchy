import { createSlice } from "@reduxjs/toolkit";

import {
	removeFullMetricAction,
	updateFullMetricStateAction,
	updateFullMetricUsedMetricAction,
} from "../actions/fullMetricActions";
import { FullMetricState } from "../types";

const initialState: FullMetricState = {
	usedMetric: undefined,
	state: undefined,
};

export const fullMetricSlice = createSlice({
	name: "fullMetric",
	initialState,
	reducers: {
		updateFullMetricState: updateFullMetricStateAction,
		removeFullMetric: removeFullMetricAction,
		updateFullMetricUsedMetric: updateFullMetricUsedMetricAction,
	},
});

export const {
	updateFullMetricState,
	updateFullMetricUsedMetric,
	removeFullMetric,
} = fullMetricSlice.actions;

export const fullMetricReducer = fullMetricSlice.reducer;
