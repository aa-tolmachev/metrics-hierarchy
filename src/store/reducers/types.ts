import {
  MetricGraph,
  MetricSubGraph,
} from "../../core/backend/_models/merticGraph/metricGraph";

export type MetricGraphSource =
  | "localStorage"
  | "config"
  | "configWithChanges"
  | undefined;

export interface MetricGraphReducerState {
  graph: MetricGraph | undefined;
  source: MetricGraphSource;
}

export interface MetricSubGraphsReducerState {
  subGraphs: MetricSubGraph[];
}

export interface SelectedMetricSubGraphState {
  subGraph: {
    comboIds: string[];
    edgeIds: string[];
    nodeIds: string[];
  };
}

export interface ComboItem {
  id: string;
  label: string;
}

export interface CombosState {
  combos: ComboItem[];
}
