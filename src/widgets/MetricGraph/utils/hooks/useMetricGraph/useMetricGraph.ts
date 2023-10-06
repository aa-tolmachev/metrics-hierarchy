import Graphin from "@antv/graphin";
import { useRef, useEffect, useCallback } from "react";
import { useDispatch } from "react-redux";
import { MetricNode } from "../../../../../core/backend/_models/merticGraph/metric";
import { MetricEdge } from "../../../../../core/backend/_models/merticGraph/metricEdge";
import { MetricGraph } from "../../../../../core/backend/_models/merticGraph/metricGraph";
import { AppDispatch } from "../../../../../store";
import {
  removeMetricSubGraphs,
  serializeMetricSubGraphs,
} from "../../../../../store/reducers/metricSubGraphsReducer";
import {
  removeMetricGraph,
  serializeMetricGraph,
} from "../../../../../store/reducers/metricGraphReducer";
import { useSetCollapseState } from "./utils/hooks/useSetCollapseState";
import { onEdgeClick } from "./utils/onEdgeClick";
import { useMetricClick } from "./utils/hooks/useMetricClick/useMetricClick";
import { makeGraphInactive } from "./utils/makeGraphInactive";

export const useMetricGraph = (metricGraph?: MetricGraph) => {
  const graphRef = useRef<Graphin>(null);

  const dispatch = useDispatch<AppDispatch>();

  const onResetGraph = useCallback(() => {
    dispatch(removeMetricGraph());
    dispatch(removeMetricSubGraphs());
  }, [dispatch]);

  const onMetricClick = useMetricClick(metricGraph);
  const setCollapseState = useSetCollapseState();

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
    const handleCanvasClick = () => makeGraphInactive(graph);
    const handleEdgeClick = onEdgeClick(graph);

    graph.on("node:click", handleMetricClick);
    graph.on("edge:click", handleEdgeClick);
    graph.on("node:touchstart", handleMetricClick);
    graph.on("canvas:click", handleCanvasClick);
    graph.on("afteradditem", setCollapseState);

    return () => {
      graph.off("node:click", handleMetricClick);
      graph.off("edge:click", handleEdgeClick);
      graph.off("node:touchstart", handleMetricClick);
      graph.off("canvas:click", handleCanvasClick);
      graph.off("afteradditem", setCollapseState);
    };
  }, [dispatch, onMetricClick, setCollapseState]);

  return { graphRef, onResetGraph };
};
