import { FC } from "react";
import { Space, Card } from "antd";
import { MetricSectionProps } from "../types";
import styles from "./OwnerCards.module.scss";
import { Heading } from "../../../components/Heading/Heading";

export const OwnerCards: FC<MetricSectionProps> = ({ metric }) => {
  const { owner, analyst } = metric;
  return (
    <Space size={16} direction="vertical">
      <Heading level={2}>Ответственные</Heading>
      <Space className={styles.owners} size={16}>
        <Card className={styles.ownerCard} title="Стейкхолдер">
          {owner}
        </Card>
        <Card className={styles.ownerCard} title="Аналитик">
          {analyst}
        </Card>
      </Space>
    </Space>
  );
};
