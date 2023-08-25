import { Outlet } from "react-router-dom";
import { MetricGraph } from "../widgets/MetricGraph/MetricGraph";
import styles from "./GraphWrapper.module.scss";
import { useGraphWrapper } from "./utils/hooks/useGraphWrapper";

export const GraphWrapper = () => {
  const { onMetricClick } = useGraphWrapper();
  return (
    <div className={styles.wrapper}>
      <Outlet />
      <MetricGraph onMetricClick={onMetricClick} />
    </div>
  );
};
