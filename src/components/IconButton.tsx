import { Button, Tooltip } from "antd";
import { TooltipPlacement } from "antd/es/tooltip";
import { FC, ReactNode } from "react";

interface IconButtonProps {
  icon: ReactNode;
  disabled?: boolean;
  tooltipText?: string;
  tooltipPlacement?: TooltipPlacement;

  onClick?: VoidFunction;
}

export const IconButton: FC<IconButtonProps> = ({
  icon,
  disabled = false,
  tooltipText,
  tooltipPlacement = "left",
  onClick,
}) => {
  const button = (
    <Button shape="circle" icon={icon} onClick={onClick} disabled={disabled} />
  );

  if (!tooltipText) return button;

  return (
    <Tooltip title={tooltipText} trigger="hover" placement={tooltipPlacement}>
      {button}
    </Tooltip>
  );
};
