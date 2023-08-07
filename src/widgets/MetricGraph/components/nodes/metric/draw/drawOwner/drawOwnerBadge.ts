/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */

import {
  CONTENT_X_OFFSET,
  OWNER_BACKGROUND,
  OWNER_PADDING,
  OWNER_STATE_Y_OFFSET,
  SMALL_LINE_HEIGHT,
} from "../constants";
import { DrawFunctionFull, GetAttrsFunctionFull } from "../types";
import { getTextWidth } from "../../../../../../../utils/getTextWidth";

const getAttrs: GetAttrsFunctionFull = (config, initialCoords, group) => {
  const { x: initialX, y: initialY } = initialCoords;

  const x = initialX + CONTENT_X_OFFSET;
  const y = initialY + OWNER_STATE_Y_OFFSET;

  const context = group.cfg.canvas.cfg.context as CanvasRenderingContext2D;
  const nameWidth = getTextWidth(context, config.owner.toString());
  const width = OWNER_PADDING.left + nameWidth + OWNER_PADDING.right;
  const height = OWNER_PADDING.top + SMALL_LINE_HEIGHT + OWNER_PADDING.bottom;

  return {
    x,
    y,
    width,
    height,
    fill: OWNER_BACKGROUND,
    radius: 4,
  };
};

export const drawOwnerBadge: DrawFunctionFull = (
  config,
  initialCoords,
  group
) => {
  const attrs = getAttrs(config, initialCoords, group);
  return group.addShape("rect", {
    attrs,
    name: "ownerBadge",
    draggable: true,
  });
};
