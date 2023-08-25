import {
  CONTENT_X_OFFSET,
  DEFAULT_FONT_WEIGHT,
  HEADING_FONT_SIZE,
  HEADING_LINE_HEIGHT,
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
    HEADING_FONT_SIZE
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
    fontSize: HEADING_FONT_SIZE,
    fontWeight: DEFAULT_FONT_WEIGHT,
    lineHeight: HEADING_LINE_HEIGHT,
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
