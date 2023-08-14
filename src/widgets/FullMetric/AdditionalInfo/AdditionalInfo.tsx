import { Descriptions, Typography } from "antd";
import { MetricSectionProps } from "../types";
import { FC } from "react";
import { Heading } from "../../../components/Heading/Heading";
import styles from "./AdditionalInfo.module.scss";

export const AdditionalInfo: FC<MetricSectionProps> = ({ metric }) => {
  const { vertical, measurements, granularity } = metric;

  const { Item } = Descriptions;
  const { Text } = Typography;

  return (
    <Descriptions
      className={styles.info}
      title={<Heading level={2}>Дополнительная информация</Heading>}
      column={1}
      bordered
    >
      <Item label="Вертикаль отнесения метрики">
        <Text>{vertical}</Text>
      </Item>
      <Item label="Измерения для метрики">
        <Text>{measurements}</Text>
      </Item>
      <Item label="Гранулярность">
        <Text>{granularity}</Text>
      </Item>
    </Descriptions>
  );
};
