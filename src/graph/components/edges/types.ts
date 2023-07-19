export interface Edge {
  source: string;
  target: string;
  style?: {
    keyshape?: {
      stroke?: string;
      lineDash?: number[];
    };
  };
}

export type EdgeType = "strongRelated" | "weakRelated";
