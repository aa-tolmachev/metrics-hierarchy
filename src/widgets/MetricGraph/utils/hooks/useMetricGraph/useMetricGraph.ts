import Graphin, { IG6GraphEvent } from "@antv/graphin";
import { useRef, useEffect, useCallback } from "react";
import { useDispatch } from "react-redux";
import { MetricNode } from "../../../../../core/backend/_models/merticGraph/metric";
import { MetricEdge } from "../../../../../core/backend/_models/merticGraph/metricEdge";
import { AppDispatch } from "../../../../../store";
import {
  removeMetricGraph,
  serializeMetricGraph,
} from "../../../../../store/reducers/metricGraphReducer";
import { mapEdge } from "../../mapEdge";
import { mapNode } from "../../mapNode";

export const useMetricGraph = (onMetricClick: (e: IG6GraphEvent) => void) => {
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

  const onSaveGraph = useCallback(() => {
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

    dispatch(serializeMetricGraph({ nodes, edges }));
  }, [dispatch]);

  const onResetGraph = useCallback(
    () => dispatch(removeMetricGraph()),
    [dispatch]
  );

  return { graphRef, onSaveGraph, onResetGraph };
};
