import { FC } from "react";
import { GraphDirection } from "../../utils/hooks/useGraphDirection";
import { IconButton } from "../../../../components/IconButton";
import { getDirectionIcon } from "./utils/getDirectionIcon";
import { GraphDirectionSetter } from "../types";
import { ActiveDirectionButton } from "./ActiveDirectionButton/ActiveDirectionButton";
import { DIRECTION_TOOLTIP_TEXT } from "./constants";
import { MetricGraphSource } from "../../../../store/reducers/types";
import { RIGHT_BUTTON_TOOLTIP_PLACEMENT } from "../constants";

interface DirectionButtonProps {
  graphSource: MetricGraphSource;
  graphDirection: GraphDirection;

  setGraphDirection?: GraphDirectionSetter;
}

export const DirectionButton: FC<DirectionButtonProps> = ({
  graphSource,
  graphDirection,
  setGraphDirection,
}) => {
  const directionIcon = getDirectionIcon(graphDirection);

  if (!setGraphDirection || graphSource !== "config")
    return (
      <IconButton
        icon={directionIcon}
        disabled
        tooltipText={DIRECTION_TOOLTIP_TEXT}
        tooltipPlacement={RIGHT_BUTTON_TOOLTIP_PLACEMENT}
      />
    );

  return (
    <ActiveDirectionButton
      directionIcon={directionIcon}
      setGraphDirection={setGraphDirection}
    />
  );
};
