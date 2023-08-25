import { cutText } from "../../../../../../../utils/cutText";
import {
  CONTENT_X_OFFSET,
  OWNER_NAME_COLOR,
  OWNER_PADDING,
  OWNER_STATE_Y_OFFSET,
  OWNER_NAME_MAX_LENGTH,
  DEFAULT_FONT_SIZE,
  DEFAULT_FONT_WEIGHT,
  DEFAULT_LINE_HEIGHT,
} from "../constants";
import { DrawFunctionFull, GetAttrsFunctionFull } from "../types";

const getAttrs: GetAttrsFunctionFull = (config, initialCoords) => {
  const { x: initialX, y: initialY } = initialCoords;

  const text = cutText(config.owner, OWNER_NAME_MAX_LENGTH);
  const x = initialX + CONTENT_X_OFFSET + OWNER_PADDING.left;
  const y =
    initialY + OWNER_STATE_Y_OFFSET + DEFAULT_LINE_HEIGHT + OWNER_PADDING.top;

  return {
    text,
    x,
    y,
    fill: OWNER_NAME_COLOR,
    fontSize: DEFAULT_FONT_SIZE,
    fontWeight: DEFAULT_FONT_WEIGHT,
    lineHeight: DEFAULT_LINE_HEIGHT,
  };
};

export const drawOwnerName: DrawFunctionFull = (
  config,
  initialCoords,
  group
) => {
  const attrs = getAttrs(config, initialCoords);
  // eslint-disable-next-line @typescript-eslint/no-unsafe-return, @typescript-eslint/no-unsafe-call
  return group.addShape("text", {
    attrs,
    name: "ownerName",
    draggable: true,
  });
};
