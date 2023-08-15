import { IUserNode } from "@antv/graphin";

export type MetricDomain =
  | "finance"
  | "product"
  | "marketing"
  | "risks"
  | "clientService"
  | "sales";

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
  methodology: string;
  metric: string | undefined;
  name: string;
  service: string;
  slices: string | undefined;
  metricType: string;
}

export interface FullMetric {
  id: string;
  name: string;
  shortName?: string;
  description?: string;
  owner: string;
  analyst: string;
  metricDomain: MetricDomain;
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
  vertical: string;
  measurements: string;
  granularity: string;
}

export const METRIC_TYPE = "metric";

export interface MetricNode extends IUserNode, Metric {
  type: typeof METRIC_TYPE;
}
