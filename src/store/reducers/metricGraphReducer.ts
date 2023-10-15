import { createSlice } from "@reduxjs/toolkit";
import { MetricGraphReducerState } from "./types";
import {
  addComboToGraphAction,
  addSubGraphToMetricGraphAction,
  deserializeMetricGraphAction,
  removeMetricGraphAction,
  serializeMetricGraphAction,
  updateGraphSourceAction,
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
    addSubGraphToMetricGraph: addSubGraphToMetricGraphAction,
    updateGraphSource: updateGraphSourceAction,
    addComboToGraph: addComboToGraphAction,
  },
});

export const {
  serializeMetricGraph,
  deserializeMetricGraph,
  removeMetricGraph,
  updateMetricGraph,
  addSubGraphToMetricGraph,
  updateGraphSource,
  addComboToGraph,
} = metricGraphSlice.actions;

export const metricGraphReducer = metricGraphSlice.reducer;
