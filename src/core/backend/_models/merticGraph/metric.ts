import { IUserNode } from "@antv/graphin";

export type MetricState = "toDo" | "inProgress" | "done";

export interface RawMetric {
  methodology: string;
  metric: string;
  name: string;
  service: string;
  slices: string;
  type: string;
}

export interface Metric {
  id: string;
  name: string;
  shortName: string;
  description?: string;
  owner: string;
  analyst: string;
  metricDomain: string;
  state: MetricState;
  size?: number[];
  value: number;
  trend: {
    trend: "up" | "down";
    value: number;
  };
  dataSource?: string;
  link?: string;
  requestExample?: string;
  vertical?: string;
  measurements: string;
  granularity: string;
}

export const METRIC_TYPE = "metric";

export interface MetricNode extends IUserNode, Metric {
  comboId?: string;
  type: typeof METRIC_TYPE;
}
