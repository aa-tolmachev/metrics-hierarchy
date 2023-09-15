import { createSlice } from "@reduxjs/toolkit";
import { MetricSubGraphsReducerState } from "./types";
import {
  removeMetricSubGraphAction,
  saveMetricSubGraphAction,
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
  },
});

export const { saveMetricSubGraph, removeMetricSubGraph } =
  metricSubGraphsSlice.actions;

export const metricSubGraphsReducer = metricSubGraphsSlice.reducer;
