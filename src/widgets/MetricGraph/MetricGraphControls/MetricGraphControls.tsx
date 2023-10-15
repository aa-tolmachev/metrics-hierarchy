import { FC } from "react";
import styles from "./MetricGraphControls.module.scss";
import { Space } from "antd";
import { GraphDirection } from "../utils/hooks/useGraphDirection";
import { DirectionButton } from "./DirectionButton/DirectionButton";
import { GraphDirectionSetter } from "./types";
import { useSelector } from "react-redux";
import { RootState } from "../../../store";
import { ResetGraphButton } from "./ResetGraphButton/ResetGraphButton";
import { ComboNodesButton } from "./ComboNodesButton/ComboNodesButton";

interface MetricGraphControlsProps {
  graphDirection: GraphDirection;

  setGraphDirection?: GraphDirectionSetter;
  onResetGraph?: VoidFunction;
  onCombine?: VoidFunction;
}

export const MetricGraphControls: FC<MetricGraphControlsProps> = ({
  graphDirection,
  setGraphDirection,
  onResetGraph,
  onCombine,
}) => {
  const { source } = useSelector((state: RootState) => state.metricGraph);
  return (
    <Space className={styles.controls}>
      <ComboNodesButton onCombine={onCombine} />
      <DirectionButton
        graphSource={source}
        graphDirection={graphDirection}
        setGraphDirection={setGraphDirection}
      />
      <ResetGraphButton onResetGraph={onResetGraph} />
    </Space>
  );
};
