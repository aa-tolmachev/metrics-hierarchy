import { MetricGraph } from "../../../../../../core/backend/_models/merticGraph/metricGraph";

export const collectSubGraph = (
  nodeId: string,
  nodeIds: string[],
  edgeIds: string[],
  graph: MetricGraph,
  isRoot = false
) => {
  const { edges } = graph;

  if (!isRoot) {
    nodeIds.push(nodeId);
  }

  edges.forEach((edge) => {
    const { id: edgeId, source, target } = edge;
    if (nodeId !== target) return;
    edgeIds.push(edgeId);
    collectSubGraph(source, nodeIds, edgeIds, graph);
  });
};
