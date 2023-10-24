import { IG6GraphEvent, Graph } from "@antv/graphin";
import { makeGraphInactive } from "./makeGraphInactive";
import { makeConnectedActive } from "./makeConnectedActive";

export const onEdgeClick = (graph: Graph) => (e: IG6GraphEvent) => {
  const { item } = e;
  if (!item) return;

  const type = item.get<"edge" | "node">("type");
  if (type !== "edge") throw new Error("not an edge");

  makeGraphInactive(graph);
  makeConnectedActive(item);
};
