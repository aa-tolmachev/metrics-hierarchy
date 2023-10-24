import { Item } from "@antv/g6";

export const makeConnectedActive = (edge: Item) => {
  const source = edge.get<Item>("source");
  const target = edge.get<Item>("target");
  edge.setState("active", true);
  source.setState("active", true);
  target.setState("active", true);
};
