import Graphin, { IG6GraphEvent } from "@antv/graphin";
import { useRef, useEffect, useCallback } from "react";
import { useDispatch } from "react-redux";
import { MetricNode } from "../../../../core/backend/_models/merticGraph/metric";
import { MetricEdge } from "../../../../core/backend/_models/merticGraph/metricEdge";
import { AppDispatch } from "../../../../store";
import {
  removeMetricGraph,
  serializeMetricGraph,
} from "../../../../store/reducers/metricGraphReducer";
import { useCollapseSubGraph } from "./useCollapseSubGraph/useCollapseSubGraph";
import { MetricGraph } from "../../../../core/backend/_models/merticGraph/metricGraph";

export const useMetricGraph = (
  onMetricClick: (e: IG6GraphEvent) => void,
  graph?: MetricGraph
) => {
  const graphRef = useRef<Graphin>(null);

  const dispatch = useDispatch<AppDispatch>();

  const collapse = useCollapseSubGraph(graph);

  const onSaveGraph = useCallback(() => {
    if (!graphRef.current) return;

    const { graph } = graphRef.current;

    const { nodes, edges } = graph.save();

    dispatch(
      serializeMetricGraph({
        nodes: nodes as MetricNode[],
        edges: edges as MetricEdge[],
      })
    );
  }, [dispatch]);

  const onResetGraph = useCallback(
    () => dispatch(removeMetricGraph()),
    [dispatch]
  );

  useEffect(() => {
    window.addEventListener("beforeunload", () => {
      onSaveGraph();
    });

    if (!graphRef.current) return;

    const { graph } = graphRef.current;

    graph.on("node:click", onMetricClick);
    graph.on("node:click", (e) => {
      const nodeId = e.item?._cfg?.id;
      if (nodeId) collapse(nodeId);
    });
    graph.on("node:touchstart", onMetricClick);

    return () => {
      onSaveGraph();
      graph.off("node:click", onMetricClick);
      graph.off("node:touchstart", onMetricClick);
    };
  }, [collapse, dispatch, onMetricClick, onSaveGraph]);

  return { graphRef, onResetGraph };
};
