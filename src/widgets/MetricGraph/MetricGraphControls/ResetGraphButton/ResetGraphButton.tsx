import { FC } from "react";
import { IconButton } from "../../../../components/IconButton";
import { ReloadOutlined } from "@ant-design/icons";
import { RIGHT_BUTTON_TOOLTIP_PLACEMENT } from "../constants";
import { useSelector } from "react-redux";
import { RootState } from "../../../../store";
import { RESET_TOOLTIP_TEXT } from "./constants";

interface ResetGraphButtonProps {
  onResetGraph?: VoidFunction;
}

export const ResetGraphButton: FC<ResetGraphButtonProps> = ({
  onResetGraph,
}) => {
  const { source } = useSelector((state: RootState) => state.metricGraph);

  if (onResetGraph)
    return (
      <IconButton
        icon={<ReloadOutlined />}
        tooltipText={RESET_TOOLTIP_TEXT}
        onClick={source !== "config" ? onResetGraph : () => undefined}
        disabled={source === "config"}
        tooltipPlacement={RIGHT_BUTTON_TOOLTIP_PLACEMENT}
      />
    );

  return (
    <IconButton
      icon={<ReloadOutlined />}
      disabled
      tooltipPlacement={RIGHT_BUTTON_TOOLTIP_PLACEMENT}
    />
  );
};
