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
}
