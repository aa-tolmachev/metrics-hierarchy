import {
  CONTENT_X_OFFSET,
  LARGE_FONT_SIZE,
  LARGE_FONT_WEIGHT,
  LARGE_LINE_HEIGHT,
  TREND_ICON_MARGIN_RIGHT,
  TREND_ICON_SIZE,
  TREND_VALUE_COLOR,
  VALUES_TEXT_Y_OFFSET,
  VALUE_MARGIN_RIGHT,
} from "../constants";
import { DrawFunctionFull, GetAttrsFunctionFull } from "../types";
import { getTextWidth } from "../../../../../../../utils/getTextWidth";

const getAttrs: GetAttrsFunctionFull = (config, initialCoords, group) => {
  const { x: initialX, y: initialY } = initialCoords;

  const context = group!.cfg.canvas.cfg.context;
  const valueWidth = getTextWidth(
    context,
    config.value.toString(),
    LARGE_FONT_SIZE
  );
  const x =
    initialX +
    CONTENT_X_OFFSET +
    valueWidth +
    VALUE_MARGIN_RIGHT +
    TREND_ICON_SIZE +
    TREND_ICON_MARGIN_RIGHT;

  const y = initialY + VALUES_TEXT_Y_OFFSET;

  return {
    text: `${config.trend.value}%`,
    x,
    y,
    fill: TREND_VALUE_COLOR,
    fontSize: LARGE_FONT_SIZE,
    fontWeight: LARGE_FONT_WEIGHT,
    lineHeight: LARGE_LINE_HEIGHT,
  };
};

export const drawTrendValue: DrawFunctionFull = (
  config,
  initialCoords,
  group
) => {
  const attrs = getAttrs(config, initialCoords, group);
  // eslint-disable-next-line @typescript-eslint/no-unsafe-return, @typescript-eslint/no-unsafe-call
  return group.addShape("text", {
    attrs,
    name: "trendValue",
    draggable: true,
  });
};
