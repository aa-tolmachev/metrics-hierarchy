import { FC } from "react";
import { Button } from "antd";
import { CloseOutlined } from "@ant-design/icons";
import { MetricConfig } from "../../core/types/metric";
import { Heading } from "../../components/Heading/Heading";
import styles from "./FullMetric.module.scss";

interface FullMetricProps {
  metric: MetricConfig;

  onCancel: VoidFunction;
}

export const FullMetric: FC<FullMetricProps> = ({ metric, onCancel }) => {
  return (
    <aside className={styles.metric}>
      <header className={styles.header}>
        <Heading level={1}>{metric.name}</Heading>
        <Button shape="circle" icon={<CloseOutlined />} onClick={onCancel}></Button>
      </header>
    </aside>
  );
};
