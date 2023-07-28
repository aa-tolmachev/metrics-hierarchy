export type MetricDomain =
  | "finance"
  | "product"
  | "marketing"
  | "risks"
  | "clientService"
  | "sales";

export type MetricState = "toDo" | "inProgress" | "done";

export interface Metric {
  name: string;
  owner: string;
  metricDomain: MetricDomain;
  state: MetricState;
  size?: number[];
  value: number;
  trend: {
    trend: "up" | "down";
    value: number;
  };
}
