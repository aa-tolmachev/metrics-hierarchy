import { cutText } from "../../../../../../../utils/cutText";
import {
  CONTENT_X_OFFSET,
  OWNER_NAME_COLOR,
  SMALL_FONT_SIZE,
  SMALL_FONT_WEIGHT,
  SMALL_LINE_HEIGHT,
  OWNER_PADDING,
  OWNER_STATE_Y_OFFSET,
  OWNER_NAME_MAX_LENGTH,
} from "../constants";
import { DrawFunctionFull, GetAttrsFunctionFull } from "../types";

const getAttrs: GetAttrsFunctionFull = (config, initialCoords) => {
  const { x: initialX, y: initialY } = initialCoords;

  const text = cutText(config.owner, OWNER_NAME_MAX_LENGTH);
  const x = initialX + CONTENT_X_OFFSET + OWNER_PADDING.left;
  const y =
    initialY + OWNER_STATE_Y_OFFSET + SMALL_LINE_HEIGHT + OWNER_PADDING.top;

  return {
    text,
    x,
    y,
    fill: OWNER_NAME_COLOR,
    fontSize: SMALL_FONT_SIZE,
    fontWeight: SMALL_FONT_WEIGHT,
    lineHeight: SMALL_LINE_HEIGHT,
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
