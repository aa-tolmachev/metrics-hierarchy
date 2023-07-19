import { ModelConfig } from "@antv/g6";
import { METRIC_TYPE } from "../..";

export type MetricDomain =
  | "finance"
  | "product"
  | "marketing"
  | "risks"
  | "clientService"
  | "sales";

type MetricState = "toDo" | "inProgress" | "done";

export interface MetricConfig extends ModelConfig {
  name: string;
  owner: string;
  metricDomain: MetricDomain;
  state: MetricState;
  type: typeof METRIC_TYPE;
  size?: number[];
  value: number;
  trend: {
    trend: "up" | "down";
    value: number;
  };
}
