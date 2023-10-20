import { PayloadAction } from "@reduxjs/toolkit";
import {
  MetricGraphReducerState,
  MetricGraphSource,
} from "../../reducers/types";
import {
  getCachedMetricGraph,
  removeMetricGraph,
  setMetricGraph,
} from "../../../core/frontend/localStorage/metricGraph";
import { getMetricGraph } from "../../../core/backend/getMetricGraph/getMetricGraph";
import { MetricGraph } from "../../../core/backend/_models/merticGraph/metricGraph";
import { getCachedMetricSubGraphs } from "../../../core/frontend/localStorage/metricSubGraphs";
import { checkConfigChanged } from "./checkConfigChanged";

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
  const cachedSubGraphs = getCachedMetricSubGraphs();
  const fetchedGraph = getMetricGraph();

  if (!cachedGraph) return { graph: fetchedGraph, source: "config" };

  const wasConfigChanged = checkConfigChanged(
    cachedGraph,
    fetchedGraph,
    cachedSubGraphs
  );

  if (wasConfigChanged) return { graph: fetchedGraph, source: "config" };

  return { graph: cachedGraph, source: "localStorage" };
};

export const updateMetricGraphAction = (
  state: MetricGraphReducerState,
  { payload }: PayloadAction<MetricGraph>
) => {
  const { source } = state;
  if (payload) return { graph: payload, source };
};

export const addSubGraphToMetricGraphAction = (
  state: MetricGraphReducerState,
  { payload }: PayloadAction<MetricGraph>
) => {
  const { graph, source } = state;

  if (!graph) throw new Error("Graph doesn't exist");

  const { nodes, edges } = graph;
  const { nodes: newNodes, edges: newEdges } = payload;

  return {
    source,
    graph: { nodes: nodes.concat(newNodes), edges: edges.concat(newEdges) },
  };
};

export const updateGraphSourceAction = (
  state: MetricGraphReducerState,
  { payload }: PayloadAction<MetricGraphSource>
) => {
  state.source = payload;
};

export const addComboToGraphAction = (
  state: MetricGraphReducerState,
  { payload }: PayloadAction<{ nodeIds: string[]; comboId: string }>
) => {
  const { nodeIds, comboId } = payload;
  nodeIds.forEach((id) => {
    const node = state.graph?.nodes.find((graphNode) => graphNode.id === id);
    if (node) node.comboId = comboId;
  });
};

export const removeCombosFromGraphAction = (
  state: MetricGraphReducerState,
  { payload: comboIds }: PayloadAction<string[]>
): MetricGraphReducerState => {
  const { graph, source } = state;
  if (!graph) throw new Error("no graph");

  const { nodes } = graph;
  const newNodes = nodes.map((node) => {
    const { comboId } = node;
    if (comboId && comboIds.includes(comboId))
      return {
        ...node,
        comboId: undefined,
      };
    return node;
  });

  return {
    source,
    graph: {
      ...graph,
      nodes: newNodes,
    },
  };
};
