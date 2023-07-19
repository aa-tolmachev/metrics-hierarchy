/* eslint-disable no-debugger */
/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/restrict-template-expressions */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */

import Graphin from "@antv/graphin";
import "normalize.css";
import {
  registerMetric,
  METRIC_TYPE,
  getEdge,
  MetricConfig,
  Edge,
} from "./graph/components";

registerMetric();

const data: { nodes: MetricConfig[]; edges: Edge[] } = {
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
      owner: "test",
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
      owner: "test",
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

function App() {
  return (
    <Graphin
      style={{
        height: "100%",
        overflow: "hidden",
        backgroundColor: "#F5F5F5",
      }}
      data={data}
      layout={{ type: "preset" }}
    />
  );
}

export default App;
