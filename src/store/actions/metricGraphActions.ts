import { PayloadAction } from "@reduxjs/toolkit";
import { MetricGraphReducerState } from "../reducers/types";
import {
  getCachedMetricGraph,
  removeMetricGraph,
  setMetricGraph,
} from "../../core/frontend/localStorage/metricGraph";
import { getMetricGraph } from "../../core/backend/getMetricGraph/getMetricGraph";

export const serializeMetricGraphAction = (
  _: MetricGraphReducerState,
  { payload }: PayloadAction<MetricGraphReducerState>
): MetricGraphReducerState => {
  const { graph } = payload;
  if (graph) setMetricGraph(graph);
  return payload;
};

export const removeMetricGraphAction = () => {
  removeMetricGraph();
  return undefined;
};

export const deserializeMetricGraphAction = (): MetricGraphReducerState => {
  const graph = getCachedMetricGraph() ?? getMetricGraph();
  return { graph };
};
