/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */

import {
  CONTAINER_WIDTH,
  COLLAPSE_BADGE_OFFSET,
  CONTAINER_HEIGHT,
  LARGE_FONT_SIZE,
} from "../draw/constants";
import { getInitialCoords } from "../draw/utils/getInitialCoords";

export const setCollapse = (collapseBadge: any, collapsePlus: any) => {
  collapseBadge.attr("fill", "#000000");

  const { x: initialX, y: initialY } = getInitialCoords();
  const x = initialX + CONTAINER_WIDTH + COLLAPSE_BADGE_OFFSET.x - 4;
  const y = initialY + CONTAINER_HEIGHT + LARGE_FONT_SIZE / 4 - 2;
  collapsePlus.attr("text", "-");
  collapsePlus.attr("x", x);
  collapsePlus.attr("y", y);
};
