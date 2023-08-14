import { useCallback } from "react";
import { IG6GraphEvent } from "@antv/g6";
import { Outlet, useNavigate } from "react-router-dom";
import { MetricGraph } from "../widgets/MetricGraph/MetricGraph";
import { MetricConfig } from "../core/frontend/types/metric";
import { buildMetricPath } from "../routes/buildPath";
import styles from "./GraphWrapper.module.scss";

export const GraphWrapper = () => {
  const nav = useNavigate();

  const onMetricClick = useCallback(
    (e: IG6GraphEvent) => {
      const item = e.item;
      if (!item) return;
      const metric = item.get<MetricConfig>("model");
      nav(buildMetricPath(metric.id));
    },
    [nav]
  );

  return (
    <div className={styles.wrapper}>
      <Outlet />
      <MetricGraph onMetricClick={onMetricClick} />
    </div>
  );
};
