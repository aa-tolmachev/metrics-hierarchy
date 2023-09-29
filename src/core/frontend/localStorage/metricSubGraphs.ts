import { MetricSubGraph } from "../../backend/_models/merticGraph/metricGraph";

const graphKey = "METRIC-SUBGRAPHS";

export const getCachedMetricSubGraphs = (): MetricSubGraph[] | undefined => {
  const data = localStorage.getItem(graphKey);
  if (!data) return;
  return JSON.parse(data) as MetricSubGraph[];
};

export const setMetricSubGraphs = (subGraphs: MetricSubGraph[]) =>
  localStorage.setItem(graphKey, JSON.stringify(subGraphs));

export const removeMetricSubGraphs = () => localStorage.removeItem(graphKey);
