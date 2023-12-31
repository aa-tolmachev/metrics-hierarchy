import { FC } from "react";
import { MetricSectionProps } from "../types";
import { Descriptions, Space, Typography } from "antd";
import { Heading } from "../../../components/Heading/Heading";
import { GRAPH_DATA_MOCK } from "../mocks";
import styles from "./AnalyticSection.module.scss";
import { Line } from "@ant-design/charts";

export const AnalyticSection: FC<MetricSectionProps> = ({ metric }) => {
  const { link, dataSource, requestExample } = metric;
  const { Text, Link } = Typography;
  const { Item } = Descriptions;

  return (
    <Space className={styles.section} size={20} direction="vertical">
      <Heading level={2}>Аналитика</Heading>
      <Descriptions
        className={styles.item}
        title={<Heading level={3}>Информация о метрике</Heading>}
        column={1}
        bordered
      >
        <Item label="Источник данных">
          {dataSource ? <Text copyable>{dataSource}</Text> : <Text>—</Text>}
        </Item>
        <Item label="Ссылка на борд метрики">
          {link ? <Link copyable>{link}</Link> : <Text>—</Text>}
        </Item>
        <Item label="Пример запроса для расчета метрики">
          {requestExample ? (
            <Text code copyable>
              {requestExample}
            </Text>
          ) : (
            <Text>—</Text>
          )}
        </Item>
      </Descriptions>
      <Space className={styles.item} size={20} direction="vertical">
        <Heading level={3}>Значения метрики</Heading>
        <Line data={GRAPH_DATA_MOCK} xField="x" yField="y" />
      </Space>
    </Space>
  );
};
