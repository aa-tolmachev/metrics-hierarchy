/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */

import {
  HEADING_COLOR,
  HEADING_FONT_WEIGHT,
  HEADING_FONT_SIZE,
  HEADING_Y_OFFSET,
  CONTENT_X_OFFSET,
  HEADING_LINE_HEIGHT,
} from "./constants";
import { DrawFunction, GetAttrsFunction } from "./types";
import { getInitialCoords } from "./utils/getInitialCoords";

const getAttrs: GetAttrsFunction = (config) => {
  const { initialX, initialY } = getInitialCoords(config);

  const x = initialX + CONTENT_X_OFFSET;
  const y = initialY + HEADING_Y_OFFSET;

  return {
    text: config.name,
    x,
    y,
    fill: HEADING_COLOR,
    fontSize: HEADING_FONT_SIZE,
    fontWeight: HEADING_FONT_WEIGHT,
    lineHeight: HEADING_LINE_HEIGHT,
  };
};

export const drawHeading: DrawFunction = (config, group) => {
  const attrs = getAttrs(config);
  return group.addShape("text", {
    attrs,
    name: "heading",
    draggable: true,
  });
};
