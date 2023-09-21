import { MetricEdge } from "../../../../../../core/backend/_models/merticGraph/metricEdge";
import { MetricGraph } from "../../../../../../core/backend/_models/merticGraph/metricGraph";

const isBelongOneSubGraph = (nodeId: string, edges: MetricEdge[]) => {
  const targetEdges = edges.filter((edge) => edge.target === nodeId);
  if (targetEdges.length === 1) return true;
  return false;
};

export const collectSubGraph = (
  nodeId: string,
  nodeIds: string[],
  edgeIds: string[],
  graph: MetricGraph,
  isRoot = false
) => {
  const { edges } = graph;

  const belongOneSubGraph = isBelongOneSubGraph(nodeId, edges);
  if (!isRoot && belongOneSubGraph) nodeIds.push(nodeId);

  edges.forEach((edge) => {
    const { id: edgeId, source, target } = edge;
    if (nodeId !== source) return;
    edgeIds.push(edgeId);
    collectSubGraph(target, nodeIds, edgeIds, graph);
  });
};
