import { createSlice } from "@reduxjs/toolkit";
import { SelectedMetricSubGraphState } from "./types";
import {
  addSelectedMetricSubGraphAction,
  clearSelectedMetricSubGraphAction,
} from "../actions/selectedMetricSubGraphActions";

const initialState: SelectedMetricSubGraphState = {
  subGraph: {
    comboIds: [],
    nodeIds: [],
    edgeIds: [],
  },
};

export const selectedMetricSubGraphSlice = createSlice({
  name: "selectedMetricSubGraph",
  initialState,
  reducers: {
    addSelectedMetricSubGraph: addSelectedMetricSubGraphAction,
    clearSelectedMetricSubGraph: clearSelectedMetricSubGraphAction,
  },
});

export const { addSelectedMetricSubGraph, clearSelectedMetricSubGraph } =
  selectedMetricSubGraphSlice.actions;

export const selectedMetricSubGraphReducer =
  selectedMetricSubGraphSlice.reducer;
