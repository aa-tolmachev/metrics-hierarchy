import { ModelConfig } from "@antv/g6";
import { IUserEdge, IUserNode } from "@antv/graphin";
import { METRIC_TYPE } from "../../../widgets/MetricGraph/components";
import { Metric } from "../../backend/_models/metric";

export type MetricConfig = Omit<ModelConfig, "size"> & Metric;

export interface MetricNode extends IUserNode, Metric {
  type: typeof METRIC_TYPE;
}

export type MetricEdgeType = "strongRelated" | "weakRelated";

export interface MetricEdge extends IUserEdge {
  source: string;
  target: string;
  style?: {
    keyshape?: {
      stroke?: string;
      lineDash?: number[];
    };
  };
}

export interface MetricGraph {
  nodes: MetricNode[];
  edges: MetricEdge[];
}
