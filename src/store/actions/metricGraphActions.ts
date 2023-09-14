import { PayloadAction } from "@reduxjs/toolkit";
import { MetricGraphReducerState } from "../reducers/types";
import {
  getCachedMetricGraph,
  removeMetricGraph,
  setMetricGraph,
} from "../../core/frontend/localStorage/metricGraph";
import { getMetricGraph } from "../../core/backend/getMetricGraph/getMetricGraph";
import { MetricGraph } from "../../core/backend/_models/merticGraph/metricGraph";

export const serializeMetricGraphAction = (
  _: MetricGraphReducerState,
  { payload }: PayloadAction<MetricGraph>
) => {
  if (payload) setMetricGraph(payload);
};

export const removeMetricGraphAction = (): MetricGraphReducerState => {
  removeMetricGraph();
  return { graph: getMetricGraph(), source: "config" };
};

export const deserializeMetricGraphAction = (): MetricGraphReducerState => {
  const cachedGraph = getCachedMetricGraph();
  const fetchedGraph = getMetricGraph();
  if (!cachedGraph || cachedGraph.nodes.length !== fetchedGraph.nodes.length)
    return { graph: fetchedGraph, source: "config" };
  for (let i = 0; i < fetchedGraph.nodes.length; i++) {
    const node = fetchedGraph.nodes[i];
    if (!cachedGraph.nodes.find((cachedNode) => cachedNode.id === node.id))
      return { graph: fetchedGraph, source: "config" };
  }
  return { graph: cachedGraph, source: "localStorage" };
};

export const updateMetricGraphAction = (
  state: MetricGraphReducerState,
  { payload }: PayloadAction<MetricGraph>
) => {
  const { source } = state;
  if (payload) return { graph: payload, source };
};
