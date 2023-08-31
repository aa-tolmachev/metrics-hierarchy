import { FC } from "react";
import { IconButton } from "../../../components/IconButton";
import styles from "./MetricGraphControls.module.scss";
import { ReloadOutlined } from "@ant-design/icons";
import { Space } from "antd";
import { useSelector } from "react-redux";
import { RootState } from "../../../store";

interface MetricGraphControlsProps {
  onResetGraph?: VoidFunction;
}

export const MetricGraphControls: FC<MetricGraphControlsProps> = ({
  onResetGraph,
}) => {
  const { source } = useSelector((state: RootState) => state.metricGraph);
  const isFromStorage = source === "localStorage";
  return (
    <Space className={styles.controls}>
      {onResetGraph ? (
        <IconButton
          icon={<ReloadOutlined />}
          tooltipText="Сбросить состояние графа"
          onClick={isFromStorage ? onResetGraph : () => undefined}
          disabled={!isFromStorage}
        />
      ) : (
        <IconButton icon={<ReloadOutlined />} disabled />
      )}
    </Space>
  );
};
