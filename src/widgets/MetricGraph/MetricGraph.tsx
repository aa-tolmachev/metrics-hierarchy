/* eslint-disable no-debugger */
/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/restrict-template-expressions */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */

import Graphin, { IG6GraphEvent } from "@antv/graphin";
import { FC, useEffect, useRef } from "react";
import { registerMetric } from "./components";
import { MetricEdge, MetricNode } from "../../core/types/metric";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../store";
import { serializeMetricGraph } from "../../store/reducers/metricGraphReducer";
import { mapNode } from "./utils/mapNode";
import { mapEdge } from "./utils/mapEdge";
import { useGraphData } from "./utils/hooks/useGraphData/useGraphData";

interface MetricGraphProps {
  onMetricClick: (e: IG6GraphEvent) => void;
}

export const MetricGraph: FC<MetricGraphProps> = ({ onMetricClick }) => {
  registerMetric();

  const data = useGraphData();

  const graphRef = useRef<Graphin>(null);

  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    if (!graphRef.current) return;

    const { graph } = graphRef.current;

    // eslint-disable-next-line @typescript-eslint/no-unnecessary-type-assertion

    graph.on("node:click", onMetricClick);

    return () => {
      graph.off("node:click", onMetricClick);
    };
  }, [dispatch, onMetricClick]);

  useEffect(() => {
    window.addEventListener("click", () => {
      if (!graphRef.current) return;

      const { graph } = graphRef.current;
      const nodes = graph
        .getNodes()
        .map(mapNode)
        .filter((node) => !!node) as MetricNode[];
      const edges = graph
        .getEdges()
        .map(mapEdge)
        .filter((edge) => !!edge) as MetricEdge[];

      debugger;

      dispatch(serializeMetricGraph({ graph: { nodes, edges } }));
    });
  }, [dispatch]);

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
