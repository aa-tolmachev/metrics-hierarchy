import { useDispatch } from "react-redux";
import { MetricGraph } from "../../../../../../core/backend/_models/merticGraph/metricGraph";
import { AppDispatch } from "../../../../../../store";
import { updateMetricGraph } from "../../../../../../store/reducers/metricGraphReducer";
import { saveMetricSubGraph } from "../../../../../../store/reducers/metricSubGraphsReducer";
import { collectSubGraph } from "./collectSubGraph";
import { MetricNode } from "../../../../../../core/backend/_models/merticGraph/metric";
import { MetricEdge } from "../../../../../../core/backend/_models/merticGraph/metricEdge";

export const useCollapseSubGraph = (graph?: MetricGraph) => {
  const dispatch = useDispatch<AppDispatch>();

  const collapse = (nodeId: string) => {
    if (!graph) return;

    const nodeIds: string[] = [];
    const edgeIds: string[] = [];

    collectSubGraph(nodeId, nodeIds, edgeIds, graph, true);

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

    const newGraph = {
      nodes: nodesAfterCollapse,
      edges: edgesAfterCollapse,
    };

    dispatch(
      saveMetricSubGraph({
        id: nodeId,
        nodes: subGraphNodes,
        edges: subGraphEdges,
      })
    );

    dispatch(updateMetricGraph(newGraph));
  };

  return collapse;
};
