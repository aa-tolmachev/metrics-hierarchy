import { GroupOutlined } from "@ant-design/icons";
import { IconButton } from "../../../../components/IconButton";
import { COMBO_TOOLTIP_TEXT } from "./constants";
import { ActiveComboNodesButton } from "./ActiveComboNodesButton/ActiveComboNodesButton";
import { useSelector } from "react-redux";
import { RootState } from "../../../../store";

export const ComboNodesButton = () => {
  const subGraph = useSelector(
    (state: RootState) => state.selectedMetricSubGraph.subGraph
  );
  const disabled = subGraph.nodeIds.length === 0;

  if (disabled)
    return (
      <IconButton
        icon={<GroupOutlined />}
        tooltipText={COMBO_TOOLTIP_TEXT}
        disabled
      />
    );

  return <ActiveComboNodesButton />;
};
