/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */

import {
  CONTENT_X_OFFSET,
  OWNER_NAME_COLOR,
  SMALL_FONT_SIZE,
  SMALL_FONT_WEIGHT,
  SMALL_LINE_HEIGHT,
  OWNER_PADDING,
  OWNER_STATE_Y_OFFSET,
} from "../constants";
import { DrawFunctionFull, GetAttrsFunctionFull } from "../types";

const getAttrs: GetAttrsFunctionFull = (config, initialCoords) => {
  const { x: initialX, y: initialY } = initialCoords;

  const x = initialX + CONTENT_X_OFFSET + OWNER_PADDING.left;
  const y =
    initialY + OWNER_STATE_Y_OFFSET + SMALL_LINE_HEIGHT + OWNER_PADDING.top;

  return {
    text: config.owner,
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
  return group.addShape("text", {
    attrs,
    name: "ownerName",
    draggable: true,
  });
};
