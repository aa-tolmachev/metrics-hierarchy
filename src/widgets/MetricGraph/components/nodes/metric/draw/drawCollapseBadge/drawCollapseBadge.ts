import {
  CONTAINER_HEIGHT,
  CONTAINER_WIDTH,
  COLLAPSE_BADGE_COLOR,
  COLLAPSE_BADGE_OFFSET,
  COLLAPSE_BADGE_RADIUS,
} from "../constants";
import { DrawFunctionFull, GetAttrsFunctionFull } from "../types";

const getAttrs: GetAttrsFunctionFull = (_, initialCoords) => {
  const { x: initialX, y: initialY } = initialCoords;
  const x = initialX + CONTAINER_WIDTH / 2 + COLLAPSE_BADGE_OFFSET.x;
  const y = initialY + CONTAINER_HEIGHT + COLLAPSE_BADGE_OFFSET.y;
  return {
    x,
    y,
    r: COLLAPSE_BADGE_RADIUS,
    fill: COLLAPSE_BADGE_COLOR,
  };
};

export const drawCollapseBadge: DrawFunctionFull = (
  config,
  initialCoords,
  group
) => {
  const attrs = getAttrs(config, initialCoords);
  // eslint-disable-next-line @typescript-eslint/no-unsafe-return, @typescript-eslint/no-unsafe-call
  return group.addShape("circle", {
    attrs,
    name: "collapseBadge",
    draggable: true,
  });
};
