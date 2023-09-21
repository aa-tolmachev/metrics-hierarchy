import Graphin, { IG6GraphEvent } from "@antv/graphin";
import { useRef, useEffect, useCallback } from "react";
import { useDispatch } from "react-redux";
import { MetricNode } from "../../../../../core/backend/_models/merticGraph/metric";
import { MetricEdge } from "../../../../../core/backend/_models/merticGraph/metricEdge";
import { MetricGraph } from "../../../../../core/backend/_models/merticGraph/metricGraph";
import { AppDispatch } from "../../../../../store";
import {
  removeMetricGraph,
  serializeMetricGraph,
} from "../../../../../store/reducers/metricGraphReducer";
import { useCollapseSubGraph } from "../subGraphs/useCollapseSubGraph/useCollapseSubGraph";
import { useExpandSubGraph } from "../subGraphs/useExpandSubGraph";
import { useGetSubGraphs } from "../subGraphs/useGetSubGraphs";
import { getSavedSubGraph } from "./getSavedSubGraph";

export const useMetricGraph = (
  onMetricClick: (e: IG6GraphEvent) => void,
  graph?: MetricGraph
) => {
  const graphRef = useRef<Graphin>(null);

  const dispatch = useDispatch<AppDispatch>();

  const collapse = useCollapseSubGraph(graph);
  const expand = useExpandSubGraph();
  const subGraphs = useGetSubGraphs();

  const onResetGraph = useCallback(
    () => dispatch(removeMetricGraph()),
    [dispatch]
  );

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
    };

    window.addEventListener("beforeunload", () => {
      onSaveGraph();
    });

    if (!graphRef.current) return;

    const { graph } = graphRef.current;

    graph.on("node:click", onMetricClick);
    graph.on("node:click", (e) => {
      const nodeId = e.item?._cfg?.id;
      if (!nodeId) return;

      const savedSubGraph = getSavedSubGraph(nodeId, subGraphs);
      if (savedSubGraph) expand(nodeId, savedSubGraph);
      else collapse(nodeId);
    });
    graph.on("node:touchstart", onMetricClick);

    return () => {
      graph.off("node:click", onMetricClick);
      graph.off("node:touchstart", onMetricClick);
    };
  }, [collapse, dispatch, expand, onMetricClick, subGraphs]);

  return { graphRef, onResetGraph };
};
