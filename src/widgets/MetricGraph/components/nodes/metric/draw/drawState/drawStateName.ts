import { cutText } from "../../../../../../../utils/cutText";
import { getTextWidth } from "../../../../../../../utils/getTextWidth";
import {
  CONTENT_X_OFFSET,
  OWNER_MARGIN_RIGHT,
  STATE_PADDING,
  OWNER_STATE_Y_OFFSET,
  STATE_NAME_COLOR,
  OWNER_PADDING,
  OWNER_NAME_MAX_LENGTH,
  DEFAULT_FONT_SIZE,
  DEFAULT_FONT_WEIGHT,
  DEFAULT_LINE_HEIGHT,
} from "../constants";
import { GetAttrsFunctionFull, DrawFunctionFull } from "../types";

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
    OWNER_MARGIN_RIGHT +
    STATE_PADDING.left;
  const y = initialY + OWNER_STATE_Y_OFFSET + DEFAULT_LINE_HEIGHT;

  return {
    text: `${config.state}`,
    x,
    y,
    fill: STATE_NAME_COLOR,
    fontSize: DEFAULT_FONT_SIZE,
    fontWeight: DEFAULT_FONT_WEIGHT,
    lineHeight: DEFAULT_LINE_HEIGHT,
  };
};

export const drawStateName: DrawFunctionFull = (
  config,
  initialCoords,
  group
) => {
  const attrs = getAttrs(config, initialCoords, group);
  // eslint-disable-next-line @typescript-eslint/no-unsafe-return, @typescript-eslint/no-unsafe-call
  return group.addShape("text", {
    attrs,
    name: "stateName",
    draggable: true,
  });
};
