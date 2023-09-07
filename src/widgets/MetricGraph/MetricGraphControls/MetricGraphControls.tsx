import { FC } from "react";
import { IconButton } from "../../../components/IconButton";
import styles from "./MetricGraphControls.module.scss";
import { ReloadOutlined } from "@ant-design/icons";
import { Space } from "antd";
import { GraphDirection } from "../utils/hooks/useGraphDirection";
import { DirectionButton } from "./DirectionButton/DirectionButton";
import { GraphDirectionSetter } from "./types";
import { useIsFromStorage } from "./utils/hooks/useIsFromStorage";
import { LAST_BUTTON_TOOLTIP_PLACEMENT } from "./constants";

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
  const isFromStorage = useIsFromStorage();

  return (
    <Space className={styles.controls}>
      <DirectionButton
        graphDirection={graphDirection}
        setGraphDirection={setGraphDirection}
      />
      {onResetGraph ? (
        <IconButton
          icon={<ReloadOutlined />}
          tooltipText="Сбросить состояние графа"
          onClick={isFromStorage ? onResetGraph : () => undefined}
          disabled={!isFromStorage}
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
