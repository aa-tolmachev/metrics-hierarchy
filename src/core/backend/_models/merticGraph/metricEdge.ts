import { IUserEdge } from "@antv/graphin";

export type MetricEdgeType = "Hard" | "Soft";

export interface RawMetricEdge {
  from: number;
  to: number;
  type: MetricEdgeType;
}

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
