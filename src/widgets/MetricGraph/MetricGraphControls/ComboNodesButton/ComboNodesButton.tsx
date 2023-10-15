import { GroupOutlined } from "@ant-design/icons";
import { IconButton } from "../../../../components/IconButton";
import { FC } from "react";
import { COMBO_TOOLTIP_TEXT } from "./constants";
import { RootState } from "../../../../store";
import { useSelector } from "react-redux";

interface ComboNodesButtonProps {
  onCombine?: VoidFunction;
}

export const ComboNodesButton: FC<ComboNodesButtonProps> = ({ onCombine }) => {
  const subGraph = useSelector(
    (state: RootState) => state.selectedMetricSubGraph.subGraph
  );

  const disabled = subGraph.nodeIds.length === 0;
  const onClick = disabled ? undefined : onCombine;

  return (
    <IconButton
      icon={<GroupOutlined />}
      tooltipText={COMBO_TOOLTIP_TEXT}
      onClick={onClick}
      disabled={disabled}
    />
  );
};
