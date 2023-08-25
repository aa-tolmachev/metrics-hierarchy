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

      if (isMetricPath(location.pathname)) {
        nav(PATH.metrics);
        return;
      }

      const metric = item.get<MetricConfig>("model");
      nav(buildMetricPath(metric.id));
    },
    [location.pathname, nav]
  );

  return { onMetricClick };
};
