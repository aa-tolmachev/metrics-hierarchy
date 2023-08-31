import { FC } from "react";
import { IconButton } from "../../../components/IconButton";
import styles from "./MetricGraphControls.module.scss";
import { ReloadOutlined, SaveOutlined } from "@ant-design/icons";
import { Space } from "antd";

interface MetricGraphControlsProps {
  onSaveGraph?: VoidFunction;
  onResetGraph?: VoidFunction;
}

export const MetricGraphControls: FC<MetricGraphControlsProps> = ({
  onSaveGraph,
  onResetGraph,
}) => {
  return (
    <Space className={styles.controls}>
      {onSaveGraph ? (
        <IconButton
          icon={<SaveOutlined />}
          tooltipText="Сохранить состояние графа"
          onClick={onSaveGraph}
        />
      ) : (
        <IconButton icon={<SaveOutlined />} disabled />
      )}
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
