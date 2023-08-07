import { MetricGraph } from "../../core/types/metric";
import { METRIC_TYPE, getEdge } from "../../widgets/MetricGraph/components";

export const MOCK_GRAPH: MetricGraph = {
  nodes: [
    {
      id: "node-0",
      name: "Metric",
      x: 200,
      y: 100,
      metricDomain: "finance",
      value: 10,
      type: METRIC_TYPE,
      trend: {
        trend: "up",
        value: 15,
      },
      owner: "Tester",
      state: "done",
    },
    {
      id: "node-1",
      name: "Cool Metric",
      x: 500,
      y: 100,
      metricDomain: "finance",
      value: 1000,
      type: METRIC_TYPE,
      trend: {
        trend: "up",
        value: 150,
      },
      owner: "Alexey",
      state: "done",
    },
    {
      id: "node-2",
      name: "GREAT Metric",
      x: 500,
      y: 300,
      metricDomain: "finance",
      value: 10000,
      type: METRIC_TYPE,
      trend: {
        trend: "up",
        value: 1500,
      },
      owner: "test",
      state: "done",
    },
  ],
  edges: [
    getEdge("node-0", "node-1"),
    getEdge("node-1", "node-2", "weakRelated"),
  ],
};
