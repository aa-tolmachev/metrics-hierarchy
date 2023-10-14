import { Outlet } from "react-router-dom";
import { MetricGraph } from "../widgets/MetricGraph/MetricGraph";
import styles from "./GraphWrapper.module.scss";

export const GraphWrapper = () => {
  return (
    <div className={styles.wrapper}>
      <Outlet />
      <MetricGraph />
    </div>
  );
};
