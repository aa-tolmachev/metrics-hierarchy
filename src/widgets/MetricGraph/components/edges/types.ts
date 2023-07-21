export interface MetricEdge {
  source: string;
  target: string;
  style?: {
    keyshape?: {
      stroke?: string;
      lineDash?: number[];
    };
  };
}

export type MetricEdgeType = "strongRelated" | "weakRelated";
