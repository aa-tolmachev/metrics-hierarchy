import { MetricGraph } from "../../core/backend/_models/merticGraph/metricGraph";

export type MetricGraphSource = "localStorage" | "config" | undefined;

export interface MetricGraphReducerState {
  graph: MetricGraph | undefined;
  source: MetricGraphSource;
}
