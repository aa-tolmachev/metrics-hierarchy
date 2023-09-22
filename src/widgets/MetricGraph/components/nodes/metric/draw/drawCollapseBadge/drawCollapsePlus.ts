/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { getTextWidth } from "../../../../../../../utils/getTextWidth";
import {
  COLLAPSE_BADGE_OFFSET,
  COLLAPSE_PLUS_COLOR,
  COLLAPSE_PLUS_TEXT,
  CONTAINER_HEIGHT,
  CONTAINER_WIDTH,
  DEFAULT_FONT_SIZE,
  DEFAULT_FONT_WEIGHT,
  DEFAULT_LINE_HEIGHT,
} from "../constants";
import { DrawFunctionFull, GetAttrsFunctionFull } from "../types";

const getAttrs: GetAttrsFunctionFull = (_, initialCoords, group) => {
  const { x: initialX, y: initialY } = initialCoords;

  const context = group!.cfg.canvas.cfg.context;
  const textWidth = getTextWidth(
    context,
    COLLAPSE_PLUS_TEXT,
    DEFAULT_FONT_SIZE
  );

  const x =
    initialX + CONTAINER_WIDTH + COLLAPSE_BADGE_OFFSET.x - textWidth / 2;
  const y = initialY + CONTAINER_HEIGHT + DEFAULT_FONT_SIZE / 4;

  return {
    text: COLLAPSE_PLUS_TEXT,
    x,
    y,
    fill: COLLAPSE_PLUS_COLOR,
    fontSize: DEFAULT_FONT_SIZE,
    fontWeight: DEFAULT_FONT_WEIGHT,
    lineHeight: DEFAULT_LINE_HEIGHT,
  };
};

export const drawCollapsePlus: DrawFunctionFull = (
  config,
  initialCoords,
  group
) => {
  const attrs = getAttrs(config, initialCoords, group);
  // eslint-disable-next-line @typescript-eslint/no-unsafe-return, @typescript-eslint/no-unsafe-call
  return group.addShape("text", {
    attrs,
    name: "collapsePlus",
    draggable: true,
  });
};
