import { MetricGraph } from "../../backend/_models/merticGraph/metricGraph";

const graphKey = "METRIC-GRAPH";

export const getCachedMetricGraph = (): MetricGraph | undefined => {
  const data = localStorage.getItem(graphKey);
  if (!data) return;
  return JSON.parse(data) as MetricGraph;
};

export const setMetricGraph = (graph: MetricGraph) =>
  localStorage.setItem(graphKey, JSON.stringify(graph));

export const removeMetricGraph = () => localStorage.removeItem(graphKey);
