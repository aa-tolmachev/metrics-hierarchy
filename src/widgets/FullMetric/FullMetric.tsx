import { FC } from "react";
import { Button, Card, Space, Typography } from "antd";
import { CloseOutlined } from "@ant-design/icons";
import { MetricConfig } from "../../core/types/metric";
import { Heading } from "../../components/Heading/Heading";
import styles from "./FullMetric.module.scss";
import { ShortInfo } from "./ShortInfo/ShortInfo";
import { Line } from "@ant-design/charts";
import { GRAPH_DATA_MOCK } from "./mocks";

interface FullMetricProps {
  metric: MetricConfig;

  onCancel: VoidFunction;
}

export const FullMetric: FC<FullMetricProps> = ({ metric, onCancel }) => {
  const { name, description, owner, analyst } = metric;
  return (
    <aside className={styles.metric}>
      <Button
        className={styles.closeButton}
        shape="circle"
        icon={<CloseOutlined />}
        onClick={onCancel}
      ></Button>
      <Space className={styles.content} direction="vertical" size={16}>
        <Heading className={styles.heading} level={1}>
          {name}
        </Heading>
        <ShortInfo metric={metric} />
        <Typography.Text>{description}</Typography.Text>
        <Line data={GRAPH_DATA_MOCK} xField="x" yField="y" />
        <Space className={styles.owners} size={16}>
          <Card title="Стейкхолдер">{owner}</Card>
          <Card title="Аналитик">{analyst}</Card>
        </Space>
      </Space>
    </aside>
  );
};
