import {
  CONTENT_X_OFFSET,
  DEFAULT_FONT_SIZE,
  DEFAULT_FONT_WEIGHT,
  DEFAULT_LINE_HEIGHT,
  VALUES_TEXT_Y_OFFSET,
  VALUE_COLOR,
} from "./constants";
import { DrawFunctionFull, GetAttrsFunctionFull } from "./types";

const getAttrs: GetAttrsFunctionFull = (config, initialCoords) => {
  const { x: initialX, y: initialY } = initialCoords;

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

export const drawValue: DrawFunctionFull = (config, initialCoords, group) => {
  const attrs = getAttrs(config, initialCoords);
  // eslint-disable-next-line @typescript-eslint/no-unsafe-return, @typescript-eslint/no-unsafe-call
  return group.addShape("text", {
    attrs,
    name: "value",
    draggable: true,
  });
};
