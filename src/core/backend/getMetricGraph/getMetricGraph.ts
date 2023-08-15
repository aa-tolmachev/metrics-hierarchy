/* eslint-disable @typescript-eslint/no-unused-vars */

import metrics from "../../../../config/metrics.yml";
import transitions from "../../../../config/transitions.yml";
import { MetricGraph } from "../_models/merticGraph/metricGraph";
import { mapEdge } from "./mapEdge/mapEdge";
import { mapMetric } from "./mapMetric";

export const getMetricGraph = (): MetricGraph => {
  const { version, ...rawMetrics } = metrics;
  const { version: edgesVersion, ...rawEdges } = transitions;

  const nodes = Object.values(rawMetrics).map(mapMetric);
  const edges = Object.values(rawEdges).map(mapEdge);

  return { nodes, edges };
};
