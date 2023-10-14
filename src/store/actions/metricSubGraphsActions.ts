import { PayloadAction } from "@reduxjs/toolkit";
import { MetricSubGraph } from "../../core/backend/_models/merticGraph/metricGraph";
import { MetricSubGraphsReducerState } from "../reducers/types";
import {
  getCachedMetricSubGraphs,
  removeMetricSubGraphs,
  setMetricSubGraphs,
} from "../../core/frontend/localStorage/metricSubGraphs";

export const saveMetricSubGraphAction = (
  state: MetricSubGraphsReducerState,
  { payload }: PayloadAction<MetricSubGraph>
) => {
  const { id, nodes, edges } = payload;
  if (nodes.length === 0 && edges.length === 0) return state;

  const savedSubGraph = state.subGraphs.find((subGraph) => subGraph.id === id);
  if (savedSubGraph) return state;

  state.subGraphs.push(payload);
};

export const removeMetricSubGraphAction = (
  state: MetricSubGraphsReducerState,
  { payload: id }: PayloadAction<string>
): MetricSubGraphsReducerState => {
  const subGraphs = state.subGraphs.filter((subGraph) => subGraph.id !== id);
  return { subGraphs };
};

export const serializeMetricSubGraphsAction = (
  state: MetricSubGraphsReducerState
) => {
  const { subGraphs } = state;
  setMetricSubGraphs(subGraphs);
};

export const deserializeMetricSubGraphsAction = () => {
  const subGraphs = getCachedMetricSubGraphs();
  return { subGraphs: subGraphs ?? [] };
};

export const removeMetricSubGraphsAction = () => {
  removeMetricSubGraphs();
  return { subGraphs: [] };
};
