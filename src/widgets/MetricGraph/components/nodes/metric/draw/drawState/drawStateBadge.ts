/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */

import {
  CONTENT_X_OFFSET,
  OWNER_MARGIN_RIGHT,
  OWNER_NAME_MAX_LENGTH,
  OWNER_PADDING,
  OWNER_STATE_Y_OFFSET,
  SMALL_LINE_HEIGHT,
  STATE_BORDER_COLOR,
  STATE_BORDER_RADIUS,
} from "../constants";
import { DrawFunctionFull, GetAttrsFunctionFull } from "../types";
import { getTextWidth } from "../../../../../../../utils/getTextWidth";
import { cutText } from "../../../../../../../utils/cutText";

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
    OWNER_MARGIN_RIGHT;
  const y = initialY + OWNER_STATE_Y_OFFSET;

  const stateWidth = getTextWidth(context, config.state.toString());

  const width = OWNER_PADDING.left + stateWidth + OWNER_PADDING.right;
  const height = OWNER_PADDING.top + SMALL_LINE_HEIGHT + OWNER_PADDING.bottom;

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
  return group.addShape("rect", {
    attrs,
    name: "stateBadge",
    draggable: true,
  });
};
