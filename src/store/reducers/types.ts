import {
  MetricGraph,
  MetricSubGraph,
} from "../../core/backend/_models/merticGraph/metricGraph";

export type MetricGraphSource = "localStorage" | "config" | undefined;

export interface MetricGraphReducerState {
  graph: MetricGraph | undefined;
  source: MetricGraphSource;
}

export interface MetricSubGraphsReducerState {
  subGraphs: MetricSubGraph[];
}
