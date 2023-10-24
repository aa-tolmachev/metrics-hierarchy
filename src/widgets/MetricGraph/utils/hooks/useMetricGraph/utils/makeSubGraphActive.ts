import { Graph } from "@antv/graphin";
import { Item } from "@antv/g6";
import { MetricEdge } from "../../../../../../core/backend/_models/merticGraph/metricEdge";

export const makeSubGraphActive = (
  node: Item,
  graph: Graph,
  isRoot?: boolean
) => {
  node.setState("active", true);
  const edges = node.get<Item[]>("edges");

  edges.forEach((edge) => {
    const { connectionType } = edge.get<MetricEdge>("model");
    if (connectionType === "Soft") return;

    edge.setState("active", true);

    const source = edge.get<Item>("source");

    const sourceId = source.get<string>("id");
    const nodeId = node.get<string>("id");

    if (sourceId === nodeId) {
      if (isRoot) {
        const target = edge.get<Item>("target");
        target.setState("active", true);
      }
      return;
    }

    makeSubGraphActive(source, graph);
  });
};
