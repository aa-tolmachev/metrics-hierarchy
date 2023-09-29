import { getSavedSubGraph } from "./getSavedSubGraph";
import {
  MetricGraph,
  MetricSubGraph,
} from "../../../../../../core/backend/_models/merticGraph/metricGraph";

export const collapseExpandSubGraph = (
  nodeId: string,
  subGraphs: MetricSubGraph[],
  collapse: (nodeId: string) => void,
  expand: (nodeId: string, subGraph: MetricGraph) => void
) => {
  const savedSubGraph = getSavedSubGraph(nodeId, subGraphs);
  if (savedSubGraph) expand(nodeId, savedSubGraph);
  else collapse(nodeId);
};
