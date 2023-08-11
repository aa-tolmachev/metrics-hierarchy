import { FC } from "react";
import { Button, Space, Typography } from "antd";
import { CloseOutlined } from "@ant-design/icons";
import { Heading } from "../../components/Heading/Heading";
import styles from "./FullMetric.module.scss";
import { ShortInfo } from "./ShortInfo/ShortInfo";
import { OwnerCards } from "./OwnerCards/OwnerCards";
import { MetricConfig } from "../../core/frontend/types/metric";
import { Scrollbar } from "react-scrollbars-custom";
import { AnalyticSection } from "./AnalyticSection/AnalyticSection";

interface FullMetricProps {
  metric: MetricConfig;

  onCancel: VoidFunction;
}

export const FullMetric: FC<FullMetricProps> = ({ metric, onCancel }) => {
  const { name, description } = metric;
  return (
    <aside className={styles.metric}>
      <Button
        className={styles.closeButton}
        shape="circle"
        icon={<CloseOutlined />}
        onClick={onCancel}
      ></Button>
      <Scrollbar className={styles.content}>
        <Space direction="vertical" size={16}>
          <Heading className={styles.heading} level={1}>
            {name}
          </Heading>
          <ShortInfo metric={metric} />
          <Typography.Paragraph>{description}</Typography.Paragraph>
          <OwnerCards metric={metric} />
          <AnalyticSection metric={metric} />
        </Space>
      </Scrollbar>
    </aside>
  );
};
