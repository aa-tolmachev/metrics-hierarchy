import { IG6GraphEvent } from "@antv/g6";
import { useCallback } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { MetricConfig } from "../../../core/frontend/types/metric";
import { buildMetricPath } from "../../../routes/buildPath";
import { PATH } from "../../../routes/paths";
import { isMetricPath } from "../isMetricPath";

export const useGraphWrapper = () => {
  const nav = useNavigate();
  const location = useLocation();

  const onMetricClick = useCallback(
    (e: IG6GraphEvent) => {
      const item = e.item;
      if (!item) return;

      // gets metric from event's item
      const { id } = item.get<MetricConfig>("model");

      if (isMetricPath(location.pathname, id)) {
        nav(PATH.metrics);
        return;
      }

      nav(buildMetricPath(id));
    },
    [location.pathname, nav]
  );

  return { onMetricClick };
};
