import { MetricSubGraph } from "../../../../../../../core/backend/_models/merticGraph/metricGraph";

export const getSavedSubGraph = (
  nodeId: string,
  subGraphs: MetricSubGraph[]
) => {
  const savedSubGraph = subGraphs.find((subGraph) => subGraph.id === nodeId);
  return savedSubGraph;
};
