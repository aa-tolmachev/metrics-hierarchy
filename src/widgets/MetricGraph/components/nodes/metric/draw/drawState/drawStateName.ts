/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */

import { cutText } from "../../../../../../../utils/cutText";
import { getTextWidth } from "../../../../../../../utils/getTextWidth";
import {
  CONTENT_X_OFFSET,
  OWNER_MARGIN_RIGHT,
  STATE_PADDING,
  OWNER_STATE_Y_OFFSET,
  STATE_NAME_COLOR,
  SMALL_FONT_SIZE,
  SMALL_FONT_WEIGHT,
  SMALL_LINE_HEIGHT,
  OWNER_PADDING,
  OWNER_NAME_MAX_LENGTH,
} from "../constants";
import { GetAttrsFunctionFull, DrawFunctionFull } from "../types";

const getAttrs: GetAttrsFunctionFull = (config, initialCoords, group) => {
  const { x: initialX, y: initialY } = initialCoords;

  const context = group.cfg.canvas.cfg.context as CanvasRenderingContext2D;
  const ownerName = cutText(config.owner, OWNER_NAME_MAX_LENGTH);
  const ownerWidth = getTextWidth(context, ownerName);

  const x =
    initialX +
    CONTENT_X_OFFSET +
    OWNER_PADDING.left +
    ownerWidth +
    OWNER_PADDING.right +
    OWNER_MARGIN_RIGHT +
    STATE_PADDING.left;
  const y = initialY + OWNER_STATE_Y_OFFSET + SMALL_LINE_HEIGHT;

  return {
    text: `${config.state}`,
    x,
    y,
    fill: STATE_NAME_COLOR,
    fontSize: SMALL_FONT_SIZE,
    fontWeight: SMALL_FONT_WEIGHT,
    lineHeight: SMALL_LINE_HEIGHT,
  };
};

export const drawStateName: DrawFunctionFull = (
  config,
  initialCoords,
  group
) => {
  const attrs = getAttrs(config, initialCoords, group);
  return group.addShape("text", {
    attrs,
    name: "stateName",
    draggable: true,
  });
};
