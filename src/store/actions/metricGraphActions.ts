import { PayloadAction } from "@reduxjs/toolkit";
import { MetricGraphReducerState } from "../reducers/types";
import {
  getMetricGraph,
  removeMetricGraph,
  setMetricGraph,
} from "../../core/frontend/localStorage/metricGraph";
import { MOCK_GRAPH } from "./constants";

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
  const graph = getMetricGraph() ?? MOCK_GRAPH;
  return { graph };
};
