/* eslint-disable no-debugger */
/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/restrict-template-expressions */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */

import Graphin, { IG6GraphEvent } from "@antv/graphin";
import { FC, useEffect, useRef, useState } from "react";
import {
  registerMetric,
  MetricNode,
  METRIC_TYPE,
  getEdge,
  MetricEdge,
} from "./components";

interface MetricGraphProps {
  onMetricClick: (e: IG6GraphEvent) => void;
}

export const MetricGraph: FC<MetricGraphProps> = ({ onMetricClick }) => {
  registerMetric();

  const [data, setData] = useState<{
    nodes: MetricNode[];
    edges: MetricEdge[];
  }>({
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
  });

  const graphRef = useRef<Graphin>(null);

  useEffect(() => {
    if (!graphRef.current) return;

    const { graph } = graphRef.current;

    graph.on("node:click", onMetricClick);

    return () => {
      graph.off("node:click", onMetricClick);
    };
  }, [onMetricClick]);

  return (
    <Graphin
      style={{
        height: "100%",
        overflow: "hidden",
        backgroundColor: "#F5F5F5",
      }}
      data={data}
      layout={{ type: "preset" }}
      ref={graphRef}
    />
  );
};
