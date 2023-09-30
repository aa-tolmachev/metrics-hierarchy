import {
  MetricGraph,
  MetricSubGraph,
} from "../../../core/backend/_models/merticGraph/metricGraph";

export const checkConfigChanged = (
  cachedGraph: MetricGraph,
  fetchedGraph: MetricGraph,
  cachedSubGraphs: MetricSubGraph[] | undefined
) => {
  const cachedGraphNodesLength = cachedGraph.nodes.length;
  const fetchedGraphNodesLength = fetchedGraph.nodes.length;

  if (!cachedSubGraphs) {
    if (cachedGraphNodesLength !== fetchedGraphNodesLength) return true;

    for (let i = 0; i < fetchedGraphNodesLength; i++) {
      const node = fetchedGraph.nodes[i];
      if (!cachedGraph.nodes.find((cachedNode) => cachedNode.id === node.id))
        return true;
    }
  }

  if (cachedSubGraphs) {
    const cachedSubGraphsNodesLength = cachedSubGraphs.reduce(
      (nodesLength, subGraph) => nodesLength + subGraph.nodes.length,
      0
    );

    if (
      cachedGraphNodesLength + cachedSubGraphsNodesLength !==
      fetchedGraphNodesLength
    )
      return true;
  }

  return false;
};
