import Graphin, { IG6GraphEvent, Behaviors } from "@antv/graphin";
import { FC, useEffect, useRef } from "react";
import { registerMetric } from "./components";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../store";
import { serializeMetricGraph } from "../../store/reducers/metricGraphReducer";
import { mapNode } from "./utils/mapNode";
import { mapEdge } from "./utils/mapEdge";
import { useGraphData } from "./utils/hooks/useGraphData/useGraphData";
import { MetricNode } from "../../core/backend/_models/merticGraph/metric";
import { MetricEdge } from "../../core/backend/_models/merticGraph/metricEdge";

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

    graph.on("node:click", onMetricClick);
    graph.on("node:touchstart", onMetricClick);

    return () => {
      graph.off("node:click", onMetricClick);
      graph.off("node:touchstart", onMetricClick);
    };
  }, [dispatch, onMetricClick]);

  useEffect(() => {
    const saveGraph = () => {
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

      dispatch(serializeMetricGraph({ graph: { nodes, edges } }));
    };

    window.addEventListener("click", saveGraph);
    window.addEventListener("touchend", saveGraph);
  }, [dispatch]);

  const { ActivateRelations, DragNodeWithForce } = Behaviors;

  return (
    <Graphin
      style={{
        height: "100%",
        overflow: "hidden",
        backgroundColor: "#F5F5F5",
      }}
      data={data}
      layout={{ type: "graphin-force" }}
      ref={graphRef}
    >
      <DragNodeWithForce autoPin />
      <ActivateRelations trigger="click" />
    </Graphin>
  );
};
