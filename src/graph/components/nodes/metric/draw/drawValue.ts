/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */

import {
  CONTENT_X_OFFSET,
  DEFAULT_FONT_SIZE,
  DEFAULT_FONT_WEIGHT,
  DEFAULT_LINE_HEIGHT,
  VALUES_TEXT_Y_OFFSET,
  VALUE_COLOR,
} from "./constants";
import { DrawFunction, GetAttrsFunction } from "./types";
import { getInitialCoords } from "./utils/getInitialCoords";

const getAttrs: GetAttrsFunction = (config) => {
  const { initialX, initialY } = getInitialCoords(config);

  const x = initialX + CONTENT_X_OFFSET;
  const y = initialY + VALUES_TEXT_Y_OFFSET;

  return {
    text: config.value,
    x,
    y,
    fill: VALUE_COLOR,
    fontSize: DEFAULT_FONT_SIZE,
    fontWeight: DEFAULT_FONT_WEIGHT,
    lineHeight: DEFAULT_LINE_HEIGHT,
  };
};

export const drawValue: DrawFunction = (config, group) => {
  const attrs = getAttrs(config);
  return group.addShape("text", {
    attrs,
    name: "value",
    draggable: true,
  });
};
