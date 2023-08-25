import {
  CONTENT_X_OFFSET,
  DEFAULT_FONT_SIZE,
  DEFAULT_LINE_HEIGHT,
  OWNER_MARGIN_RIGHT,
  OWNER_NAME_MAX_LENGTH,
  OWNER_PADDING,
  OWNER_STATE_Y_OFFSET,
  STATE_BORDER_COLOR,
  STATE_BORDER_RADIUS,
} from "../constants";
import { DrawFunctionFull, GetAttrsFunctionFull } from "../types";
import { getTextWidth } from "../../../../../../../utils/getTextWidth";
import { cutText } from "../../../../../../../utils/cutText";

const getAttrs: GetAttrsFunctionFull = (config, initialCoords, group) => {
  const { x: initialX, y: initialY } = initialCoords;

  const context = group!.cfg.canvas.cfg.context;
  const ownerName = cutText(config.owner, OWNER_NAME_MAX_LENGTH);
  const ownerWidth = getTextWidth(context, ownerName, DEFAULT_FONT_SIZE);

  const x =
    initialX +
    CONTENT_X_OFFSET +
    OWNER_PADDING.left +
    ownerWidth +
    OWNER_PADDING.right +
    OWNER_MARGIN_RIGHT;
  const y = initialY + OWNER_STATE_Y_OFFSET;

  const stateWidth = getTextWidth(
    context,
    config.state.toString(),
    DEFAULT_FONT_SIZE
  );

  const width = OWNER_PADDING.left + stateWidth + OWNER_PADDING.right;
  const height = OWNER_PADDING.top + DEFAULT_LINE_HEIGHT + OWNER_PADDING.bottom;

  return {
    x,
    y,
    width,
    height,
    radius: STATE_BORDER_RADIUS,
    stroke: STATE_BORDER_COLOR,
  };
};

export const drawStateBadge: DrawFunctionFull = (
  config,
  initialCoords,
  group
) => {
  const attrs = getAttrs(config, initialCoords, group);
  // eslint-disable-next-line @typescript-eslint/no-unsafe-return, @typescript-eslint/no-unsafe-call
  return group.addShape("rect", {
    attrs,
    name: "stateBadge",
    draggable: true,
  });
};
