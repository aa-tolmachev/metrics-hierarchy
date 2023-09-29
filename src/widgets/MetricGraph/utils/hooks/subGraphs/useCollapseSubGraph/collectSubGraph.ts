import { MetricEdge } from "../../../../../../core/backend/_models/merticGraph/metricEdge";
import { MetricGraph } from "../../../../../../core/backend/_models/merticGraph/metricGraph";

const isbelongManySubGraph = (nodeId: string, edges: MetricEdge[]) => {
  const sourceEdges = edges.filter((edge) => edge.source === nodeId);
  if (sourceEdges.length > 1) return true;
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

  const belongManySubGraph = isbelongManySubGraph(nodeId, edges);

  if (!isRoot) {
    if (belongManySubGraph) return;
    nodeIds.push(nodeId);
  }

  edges.forEach((edge) => {
    const { id: edgeId, source, target } = edge;
    if (nodeId !== target) return;
    edgeIds.push(edgeId);
    collectSubGraph(source, nodeIds, edgeIds, graph);
  });
};
