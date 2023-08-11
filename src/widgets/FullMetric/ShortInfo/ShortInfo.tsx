import { FC } from "react";
import styles from "./ShortInfo.module.scss";
import { Space } from "antd";
import { LargeBadge } from "../../../components/LargeBadge/LargeBadge";
import { TextTooltip } from "../../../components/TextTooltip/TextTooltip";
import { MetricSectionProps } from "../types";

export const ShortInfo: FC<MetricSectionProps> = ({ metric }) => {
  const { shortName, metricDomain } = metric;
  return (
    <Space size={8} className={styles.shortInfo}>
      {shortName && (
        <TextTooltip tooltip="Краткое обозначение метрики">
          {shortName}
        </TextTooltip>
      )}
      <LargeBadge backgroundColor="#50E537">{metricDomain}</LargeBadge>
    </Space>
  );
};
