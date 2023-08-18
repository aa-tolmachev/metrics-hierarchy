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
) => {
  const { graph } = payload;
  if (graph) setMetricGraph(graph);
};

export const removeMetricGraphAction = () => {
  removeMetricGraph();
  return undefined;
};

export const deserializeMetricGraphAction = (): MetricGraphReducerState => {
  const cachedGraph = getCachedMetricGraph();
  const fetchedGraph = getMetricGraph();
  if (!cachedGraph || cachedGraph.nodes.length !== fetchedGraph.nodes.length)
    return { graph: fetchedGraph };
  for (let i = 0; i < fetchedGraph.nodes.length; i++) {
    const node = fetchedGraph.nodes[i];
    if (!cachedGraph.nodes.find((cachedNode) => cachedNode.id === node.id))
      return { graph: fetchedGraph };
  }
  return { graph: cachedGraph };
};
