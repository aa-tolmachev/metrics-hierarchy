import { FC } from "react";
import { GraphDirection } from "../../utils/hooks/useGraphDirection";
import { IconButton } from "../../../../components/IconButton";
import { getDirectionIcon } from "./utils/getDirectionIcon";
import { GraphDirectionSetter } from "../types";
import { ActiveDirectionButton } from "./ActiveDirectionButton/ActiveDirectionButton";
import { useIsFromStorage } from "../utils/hooks/useIsFromStorage";
import { DIRECTION_TOOLTIP_TEXT } from "./constants";

interface DirectionButtonProps {
  graphDirection: GraphDirection;

  setGraphDirection?: GraphDirectionSetter;
}

export const DirectionButton: FC<DirectionButtonProps> = ({
  graphDirection,
  setGraphDirection,
}) => {
  const isFromStorage = useIsFromStorage();

  const directionIcon = getDirectionIcon(graphDirection);

  if (!setGraphDirection || isFromStorage)
    return (
      <IconButton
        icon={directionIcon}
        disabled
        tooltipText={DIRECTION_TOOLTIP_TEXT}
      />
    );

  return (
    <ActiveDirectionButton
      directionIcon={directionIcon}
      setGraphDirection={setGraphDirection}
    />
  );
};
