import { IG6GraphEvent, Graph } from "@antv/graphin";
import { Item } from "@antv/g6";
import { makeSubGraphActive } from "./makeSubGraphActive";
import { makeGraphInactive } from "./makeGraphInactive";

export const onEdgeClick = (graph: Graph) => (e: IG6GraphEvent) => {
  const { item } = e;
  if (!item) return;

  const type = item.get<"edge" | "node">("type");
  if (type !== "edge") throw new Error("not an edge");

  const source = item.get<Item>("source");
  makeGraphInactive(graph);
  makeSubGraphActive(source, graph, true);
};
