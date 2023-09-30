import Graphin from "@antv/graphin";
import { useRef, useEffect, useCallback } from "react";
import { useDispatch } from "react-redux";
import { MetricNode } from "../../../../../core/backend/_models/merticGraph/metric";
import { MetricEdge } from "../../../../../core/backend/_models/merticGraph/metricEdge";
import { MetricGraph } from "../../../../../core/backend/_models/merticGraph/metricGraph";
import { AppDispatch } from "../../../../../store";
import { useMetricClick } from "./useMetricClick/useMetricClick";
import {
  removeMetricSubGraphs,
  serializeMetricSubGraphs,
} from "../../../../../store/reducers/metricSubGraphsReducer";
import {
  removeMetricGraph,
  serializeMetricGraph,
} from "../../../../../store/reducers/metricGraphReducer";

export const useMetricGraph = (metricGraph?: MetricGraph) => {
  const graphRef = useRef<Graphin>(null);

  const dispatch = useDispatch<AppDispatch>();

  const onResetGraph = useCallback(() => {
    dispatch(removeMetricGraph());
    dispatch(removeMetricSubGraphs());
  }, [dispatch]);

  const onMetricClick = useMetricClick(metricGraph);

  useEffect(() => {
    const onSaveGraph = () => {
      if (!graphRef.current) return;

      const { graph } = graphRef.current;

      const { nodes, edges } = graph.save();

      dispatch(
        serializeMetricGraph({
          nodes: nodes as MetricNode[],
          edges: edges as MetricEdge[],
        })
      );
      dispatch(serializeMetricSubGraphs());
    };

    window.addEventListener("beforeunload", () => {
      onSaveGraph();
    });

    if (!graphRef.current) return;

    const { graph } = graphRef.current;

    const handleMetricClick = onMetricClick(graph);

    graph.on("node:click", handleMetricClick);
    graph.on("node:touchstart", handleMetricClick);

    return () => {
      graph.off("node:click", handleMetricClick);
      graph.off("node:touchstart", handleMetricClick);
    };
  }, [dispatch, onMetricClick]);

  return { graphRef, onResetGraph };
};
