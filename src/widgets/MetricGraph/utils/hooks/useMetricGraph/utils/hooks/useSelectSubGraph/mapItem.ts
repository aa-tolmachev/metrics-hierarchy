import { Item } from "@antv/g6";

export const mapItem = (item: Item) => item.get<string>("id");
