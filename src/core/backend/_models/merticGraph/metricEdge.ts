import { IUserEdge } from "@antv/graphin";

export type ConnectionType = "Hard" | "Soft";

export interface RawMetricEdge {
  from: number;
  to: number;
  type: ConnectionType;
}

export interface MetricEdge extends IUserEdge {
  id: string;
  source: string;
  target: string;
  connectionType: ConnectionType;
  style?: {
    keyshape?: {
      stroke?: string;
      lineDash?: number[];
    };
  };
}
