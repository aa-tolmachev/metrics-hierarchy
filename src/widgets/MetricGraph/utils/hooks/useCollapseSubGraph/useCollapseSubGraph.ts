import { useDispatch } from "react-redux";
import { MetricGraph } from "../../../../../core/backend/_models/merticGraph/metricGraph";
import { collectSubGraph } from "./collectSubGraph";
import { AppDispatch } from "../../../../../store";
import { updateMetricGraph } from "../../../../../store/reducers/metricGraphReducer";

export const useCollapseSubGraph = (graph?: MetricGraph) => {
  const dispatch = useDispatch<AppDispatch>();

  const collapse = (nodeId: string) => {
    if (!graph) return;

    const nodeIds: string[] = [];
    const edgeIds: string[] = [];

    collectSubGraph(nodeId, nodeIds, edgeIds, graph, true);

    const { nodes, edges } = graph;
    const nodesAfterCollapse = nodes.filter(
      (node) => !nodeIds.includes(node.id)
    );
    const edgesAfterCollapse = edges.filter(
      (edge) => !edgeIds.includes(edge.id)
    );

    dispatch(
      updateMetricGraph({
        nodes: nodesAfterCollapse,
        edges: edgesAfterCollapse,
      })
    );
  };

  return collapse;
};
