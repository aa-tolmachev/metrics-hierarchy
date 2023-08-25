/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */

import {
  CONTENT_X_OFFSET,
  OWNER_BACKGROUND,
  OWNER_NAME_MAX_LENGTH,
  OWNER_PADDING,
  OWNER_STATE_Y_OFFSET,
  DEFAULT_LINE_HEIGHT,
  DEFAULT_FONT_SIZE,
} from "../constants";
import { DrawFunctionFull, GetAttrsFunctionFull } from "../types";
import { getTextWidth } from "../../../../../../../utils/getTextWidth";
import { cutText } from "../../../../../../../utils/cutText";

const getAttrs: GetAttrsFunctionFull = (config, initialCoords, group) => {
  const { x: initialX, y: initialY } = initialCoords;

  const x = initialX + CONTENT_X_OFFSET;
  const y = initialY + OWNER_STATE_Y_OFFSET;

  const context = group!.cfg.canvas.cfg.context;
  const text = cutText(config.owner, OWNER_NAME_MAX_LENGTH);
  const nameWidth = getTextWidth(context, text, DEFAULT_FONT_SIZE);
  const width = OWNER_PADDING.left + nameWidth + OWNER_PADDING.right;
  const height = OWNER_PADDING.top + DEFAULT_LINE_HEIGHT + OWNER_PADDING.bottom;

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
