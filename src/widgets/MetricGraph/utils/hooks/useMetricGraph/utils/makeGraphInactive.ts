import { Graph } from "@antv/graphin";

export const makeGraphInactive = (graph: Graph) => {
  const allNodes = graph.getNodes();
  const allEdges = graph.getEdges();
  allNodes.forEach((node) => {
    node.clearStates();
    node.setState("inactive", true);
  });
  allEdges.forEach((edge) => edge.clearStates());
};
