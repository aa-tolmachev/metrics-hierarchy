import { MetricGraph } from "../../backend/_models/merticGraph/metricGraph";
import { getFromStorage } from "./utils/getFromStorage";
import { removeFromStorage } from "./utils/removeFromStorage";
import { setToStorage } from "./utils/setToStorage";

const graphKey = "METRIC-GRAPH";

export const getCachedMetricGraph = (): MetricGraph | undefined =>
  getFromStorage<MetricGraph>(graphKey);

export const setMetricGraph = (graph: MetricGraph) =>
  setToStorage(graph, graphKey);

export const removeMetricGraph = () => removeFromStorage(graphKey);
