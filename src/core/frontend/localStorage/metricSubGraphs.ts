import { MetricSubGraph } from "../../backend/_models/merticGraph/metricGraph";
import { getFromStorage } from "./utils/getFromStorage";
import { removeFromStorage } from "./utils/removeFromStorage";
import { setToStorage } from "./utils/setToStorage";

const subGraphsKey = "METRIC-SUBGRAPHS";

export const getCachedMetricSubGraphs = (): MetricSubGraph[] | undefined =>
  getFromStorage<MetricSubGraph[]>(subGraphsKey);

export const setMetricSubGraphs = (subGraphs: MetricSubGraph[]) =>
  setToStorage(subGraphs, subGraphsKey);

export const removeMetricSubGraphs = () => removeFromStorage(subGraphsKey);
