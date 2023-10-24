import { Item } from "@antv/g6";

export interface SelectedEvent {
  selected: boolean;
  selectedItems: {
    combos: Item[];
    edges: Item[];
    nodes: Item[];
  };
}
