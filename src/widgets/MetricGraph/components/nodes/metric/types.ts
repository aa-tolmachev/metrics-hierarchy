import { ModelConfig } from "@antv/g6";
import { METRIC_TYPE } from "../..";
import { IUserNode } from "@antv/graphin";

export type MetricDomain =
  | "finance"
  | "product"
  | "marketing"
  | "risks"
  | "clientService"
  | "sales";

type MetricState = "toDo" | "inProgress" | "done";

interface MetricProperties {
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

export type MetricConfig = Omit<ModelConfig, "size"> & MetricProperties;

export interface MetricNode extends IUserNode, MetricProperties {
  type: typeof METRIC_TYPE;
}
