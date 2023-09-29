import { MetricNode } from "./metric";
import { MetricEdge } from "./metricEdge";

export interface MetricGraph {
  nodes: MetricNode[];
  edges: MetricEdge[];
}

export interface MetricSubGraph extends MetricGraph {
  id: string;
}
