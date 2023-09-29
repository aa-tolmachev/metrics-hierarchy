import { createSlice } from "@reduxjs/toolkit";
import { MetricSubGraphsReducerState } from "./types";
import {
  deserializeMetricSubGraphsAction,
  removeMetricSubGraphAction,
  removeMetricSubGraphsAction,
  saveMetricSubGraphAction,
  serializeMetricSubGraphsAction,
} from "../actions/metricSubGraphsActions";

const initialState: MetricSubGraphsReducerState = {
  subGraphs: [],
};

export const metricSubGraphsSlice = createSlice({
  name: "metricGraph",
  initialState,
  reducers: {
    saveMetricSubGraph: saveMetricSubGraphAction,
    removeMetricSubGraph: removeMetricSubGraphAction,
    serializeMetricSubGraphs: serializeMetricSubGraphsAction,
    deserializeMetricSubGraphs: deserializeMetricSubGraphsAction,
    removeMetricSubGraphs: removeMetricSubGraphsAction,
  },
});

export const {
  saveMetricSubGraph,
  removeMetricSubGraph,
  serializeMetricSubGraphs,
  deserializeMetricSubGraphs,
  removeMetricSubGraphs,
} = metricSubGraphsSlice.actions;

export const metricSubGraphsReducer = metricSubGraphsSlice.reducer;
