import { Graph, IG6GraphEvent } from "@antv/graphin";
import { useCallback } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { makeSubGraphActive } from "../../makeSubGraphActive";
import { makeGraphInactive } from "../../makeGraphInactive";
import { MetricGraph } from "../../../../../../../../core/backend/_models/merticGraph/metricGraph";
import { MetricConfig } from "../../../../../../../../core/frontend/types/metric";
import { buildMetricPath } from "../../../../../../../../routes/buildPath";
import { PATH } from "../../../../../../../../routes/paths";
import { isMetricPath } from "../../../../../../../../wrappers/utils/isMetricPath";
import { useCollapseSubGraph } from "../../../../subGraphs/useCollapseSubGraph/useCollapseSubGraph";
import { useExpandSubGraph } from "../../../../subGraphs/useExpandSubGraph";
import { useGetSubGraphs } from "../../../../subGraphs/useGetSubGraphs";
import { collapseExpandSubGraph } from "./utils/collapseExpandSubGraph";

export const useMetricClick = (graph?: MetricGraph) => {
  const nav = useNavigate();
  const location = useLocation();

  const collapse = useCollapseSubGraph(graph);
  const expand = useExpandSubGraph();
  const subGraphs = useGetSubGraphs();

  const onMetricClick = useCallback(
    (graph: Graph) => (e: IG6GraphEvent) => {
      const { item, shape } = e;
      if (!item) return;

      makeGraphInactive(graph);
      makeSubGraphActive(item, graph, true);

      // gets metric from event's item
      const { id } = item.get<MetricConfig>("model");

      const name = shape.get("name") as string;
      if (name === "collapseBadge" || name === "collapsePlus") {
        collapseExpandSubGraph(item, subGraphs, collapse, expand);
        return;
      }

      if (isMetricPath(location.pathname, id)) {
        nav(PATH.metrics);
        return;
      }

      nav(buildMetricPath(id));
    },
    [collapse, expand, location.pathname, nav, subGraphs]
  );

  return onMetricClick;
};
