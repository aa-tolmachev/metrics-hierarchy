import { getSavedSubGraph } from "./getSavedSubGraph";
import {
  MetricGraph,
  MetricSubGraph,
} from "../../../../../../core/backend/_models/merticGraph/metricGraph";
import { Item } from "@antv/g6";
import { MetricConfig } from "../../../../../../core/frontend/types/metric";

export const collapseExpandSubGraph = (
  item: Item,
  subGraphs: MetricSubGraph[],
  collapse: (item: Item) => void,
  expand: (nodeId: string, subGraph: MetricGraph) => void
) => {
  // gets metric from event's item
  const { id } = item.get<MetricConfig>("model");

  const savedSubGraph = getSavedSubGraph(id, subGraphs);
  if (savedSubGraph) expand(id, savedSubGraph);
  else {
    collapse(item);
  }
};
