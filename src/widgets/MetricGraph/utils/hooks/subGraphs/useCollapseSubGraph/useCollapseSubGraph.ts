import { useDispatch } from "react-redux";
import { MetricGraph } from "../../../../../../core/backend/_models/merticGraph/metricGraph";
import { AppDispatch } from "../../../../../../store";
import {
  updateGraphSource,
  updateMetricGraph,
} from "../../../../../../store/reducers/metricGraphReducer";
import { collectSubGraph } from "./collectSubGraph";
import { MetricNode } from "../../../../../../core/backend/_models/merticGraph/metric";
import { MetricEdge } from "../../../../../../core/backend/_models/merticGraph/metricEdge";
import { Item } from "@antv/g6";
import { MetricConfig } from "../../../../../../core/frontend/types/metric";
import { saveMetricSubGraph } from "../../../../../../store/reducers/metricSubGraphsReducer";

export const useCollapseSubGraph = (graph?: MetricGraph) => {
  const dispatch = useDispatch<AppDispatch>();

  const collapse = (item: Item) => {
    if (!graph) return;

    // gets metric from event's item
    const { id } = item.get<MetricConfig>("model");

    const nodeIds: string[] = [];
    const edgeIds: string[] = [];

    collectSubGraph(id, nodeIds, edgeIds, graph, true);

    const { nodes, edges } = graph;

    const nodesAfterCollapse: MetricNode[] = [];
    const edgesAfterCollapse: MetricEdge[] = [];
    const subGraphNodes: MetricNode[] = [];
    const subGraphEdges: MetricEdge[] = [];

    nodes.forEach((node) => {
      if (nodeIds.includes(node.id)) subGraphNodes.push(node);
      else nodesAfterCollapse.push(node);
    });

    edges.forEach((edge) => {
      if (edgeIds.includes(edge.id)) subGraphEdges.push(edge);
      else edgesAfterCollapse.push(edge);
    });

    if (subGraphNodes.length === 0 && subGraphEdges.length === 0) return;

    // TO-DO: make this work as intended
    setTimeout(() => item.setState("collapsed", true), 100);

    const newGraph = {
      nodes: nodesAfterCollapse,
      edges: edgesAfterCollapse,
    };

    dispatch(
      saveMetricSubGraph({
        id,
        nodes: subGraphNodes,
        edges: subGraphEdges,
      })
    );

    dispatch(updateMetricGraph(newGraph));

    dispatch(updateGraphSource("configWithChanges"));
  };

  return collapse;
};
