import { cutText } from "../../../../../../utils/cutText";
import {
  HEADING_COLOR,
  HEADING_FONT_WEIGHT,
  HEADING_FONT_SIZE,
  HEADING_Y_OFFSET,
  CONTENT_X_OFFSET,
  HEADING_LINE_HEIGHT,
  MAX_HEADING_WIDTH,
} from "./constants";
import { DrawFunctionFull, GetAttrsFunctionFull } from "./types";

const getAttrs: GetAttrsFunctionFull = (config, initialCoords) => {
  const { x: initialX, y: initialY } = initialCoords;

  const text = cutText(config.shortName, MAX_HEADING_WIDTH);
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
  // eslint-disable-next-line @typescript-eslint/no-unsafe-return, @typescript-eslint/no-unsafe-call
  return group.addShape("text", {
    attrs,
    name: "heading",
    draggable: true,
  });
};
