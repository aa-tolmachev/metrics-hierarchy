import { FC } from "react";
import { IconButton } from "../../../components/IconButton";
import styles from "./MetricGraphControls.module.scss";
import { ReloadOutlined } from "@ant-design/icons";
import { Space } from "antd";

interface MetricGraphControlsProps {
  onResetGraph?: VoidFunction;
}

export const MetricGraphControls: FC<MetricGraphControlsProps> = ({
  onResetGraph,
}) => {
  return (
    <Space className={styles.controls}>
      {onResetGraph ? (
        <IconButton
          icon={<ReloadOutlined />}
          tooltipText="Сбросить состояние графа"
          tooltipPlacement="bottomRight"
          onClick={onResetGraph}
        />
      ) : (
        <IconButton icon={<ReloadOutlined />} disabled />
      )}
    </Space>
  );
};
