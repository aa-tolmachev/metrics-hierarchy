import { Space, Popover } from "antd";
import { IconButton } from "../../../../../components/IconButton";
import { FC, ReactNode, useState } from "react";
import { GraphDirection } from "../../../utils/hooks/useGraphDirection";
import { getDirectionIcon } from "../utils/getDirectionIcon";
import { GraphDirectionSetter } from "../../types";
import { DIRECTION_TOOLTIP_TEXT } from "../constants";

interface ActiveDirectionButtonProps {
  directionIcon: ReactNode;

  setGraphDirection: GraphDirectionSetter;
}

const DIRECTIONS: GraphDirection[] = ["BT", "LR", "RL", "TB"];

export const ActiveDirectionButton: FC<ActiveDirectionButtonProps> = ({
  directionIcon,
  setGraphDirection,
}) => {
  const [openPopover, setOpenPopover] = useState(false);

  const onPopoverItemClick = (direction: GraphDirection) => () => {
    setGraphDirection(direction);
    setOpenPopover(false);
  };

  const popoverContent = (
    <Space>
      {DIRECTIONS.map((direction) => (
        <IconButton
          icon={getDirectionIcon(direction)}
          onClick={onPopoverItemClick(direction)}
          tooltipText={DIRECTION_TOOLTIP_TEXT}
        />
      ))}
    </Space>
  );

  return (
    <Popover
      content={popoverContent}
      trigger="click"
      open={openPopover}
      onOpenChange={(open) => setOpenPopover(open)}
      placement="bottomRight"
    >
      <IconButton icon={directionIcon} tooltipText={DIRECTION_TOOLTIP_TEXT} />
    </Popover>
  );
};
