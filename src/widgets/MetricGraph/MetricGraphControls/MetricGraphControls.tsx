import { FC } from "react";
import { IconButton } from "../../../components/IconButton";
import styles from "./MetricGraphControls.module.scss";
import { ReloadOutlined } from "@ant-design/icons";
import { Space } from "antd";
import { GraphDirection } from "../utils/hooks/useGraphDirection";
import { DirectionButton } from "./DirectionButton/DirectionButton";
import { GraphDirectionSetter } from "./types";
import { LAST_BUTTON_TOOLTIP_PLACEMENT } from "./constants";
import { useSelector } from "react-redux";
import { RootState } from "../../../store";

interface MetricGraphControlsProps {
  graphDirection: GraphDirection;

  setGraphDirection?: GraphDirectionSetter;
  onResetGraph?: VoidFunction;
}

export const MetricGraphControls: FC<MetricGraphControlsProps> = ({
  graphDirection,
  setGraphDirection,
  onResetGraph,
}) => {
  const { source } = useSelector((state: RootState) => state.metricGraph);

  return (
    <Space className={styles.controls}>
      <DirectionButton
        graphSource={source}
        graphDirection={graphDirection}
        setGraphDirection={setGraphDirection}
      />
      {onResetGraph ? (
        <IconButton
          icon={<ReloadOutlined />}
          tooltipText="Сбросить состояние графа"
          onClick={source !== "config" ? onResetGraph : () => undefined}
          disabled={source === "config"}
          tooltipPlacement={LAST_BUTTON_TOOLTIP_PLACEMENT}
        />
      ) : (
        <IconButton
          icon={<ReloadOutlined />}
          disabled
          tooltipPlacement={LAST_BUTTON_TOOLTIP_PLACEMENT}
        />
      )}
    </Space>
  );
};
