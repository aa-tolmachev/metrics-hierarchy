import { createSlice } from "@reduxjs/toolkit";
import { MetricGraphReducerState } from "./types";
import {
  deserializeMetricGraphAction,
  removeMetricGraphAction,
  serializeMetricGraphAction,
  updateMetricGraphAction,
} from "../actions/metricGraphActions";

const initialState: MetricGraphReducerState = {
  graph: undefined,
  source: undefined,
};

export const metricGraphSlice = createSlice({
  name: "metricGraph",
  initialState,
  reducers: {
    serializeMetricGraph: serializeMetricGraphAction,
    deserializeMetricGraph: deserializeMetricGraphAction,
    removeMetricGraph: removeMetricGraphAction,
    updateMetricGraph: updateMetricGraphAction,
  },
});

export const {
  serializeMetricGraph,
  deserializeMetricGraph,
  removeMetricGraph,
  updateMetricGraph,
} = metricGraphSlice.actions;

export const metricGraphReducer = metricGraphSlice.reducer;
