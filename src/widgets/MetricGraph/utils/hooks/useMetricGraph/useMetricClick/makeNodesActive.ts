import { Graph } from "@antv/graphin";
import { Item } from "@antv/g6";
import { MetricGraph } from "../../../../../../core/backend/_models/merticGraph/metricGraph";
import { MetricEdge } from "../../../../../../core/backend/_models/merticGraph/metricEdge";

export const makeNodesActive = (node: Item, graph: Graph) => {
  const allNodes = graph.getNodes();
  const allEdges = graph.getEdges();
  debugger;
  allNodes.forEach((node) => node.clearStates());
  //   allEdges.forEach((edge) => edge.clearStates());
  debugger;

  node.setState("active", true);
  const edges = node.get<Item[]>("edges");

  edges.forEach((edge) => {
    edge.setState("active", true);

    const source = edge.get<Item>("source");

    const sourceId = source.get<string>("id");
    const nodeId = node.get<string>("id");
    if (sourceId === nodeId) return;

    makeNodesActive(source, graph);
  });

  //   edges.forEach((edge) => {
  //     const { id: edgeId, source, target } = edge;
  //     if (nodeId !== target) return;

  //     makeNodesActive(source, graph);
  //   });
};
