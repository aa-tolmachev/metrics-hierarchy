/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */

import { cutText } from "../../../../../../utils/cutText";
import {
  HEADING_COLOR,
  HEADING_FONT_WEIGHT,
  HEADING_FONT_SIZE,
  HEADING_Y_OFFSET,
  CONTENT_X_OFFSET,
  HEADING_LINE_HEIGHT,
} from "./constants";
import { DrawFunctionFull, GetAttrsFunctionFull } from "./types";

const getAttrs: GetAttrsFunctionFull = (config, initialCoords) => {
  const { x: initialX, y: initialY } = initialCoords;

  const text = cutText(config.name, 13);
  const x = initialX + CONTENT_X_OFFSET;
  const y = initialY + HEADING_Y_OFFSET;

  return {
    text,
    x,
    y,
    fill: HEADING_COLOR,
    fontSize: HEADING_FONT_SIZE,
    fontWeight: HEADING_FONT_WEIGHT,
    lineHeight: HEADING_LINE_HEIGHT,
  };
};

export const drawHeading: DrawFunctionFull = (config, initialCoords, group) => {
  const attrs = getAttrs(config, initialCoords);
  return group.addShape("text", {
    attrs,
    name: "heading",
    draggable: true,
  });
};
