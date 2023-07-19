/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */

import { MetricConfig } from "../../types";
import {
  CONTENT_X_OFFSET,
  DEFAULT_FONT_SIZE,
  DEFAULT_FONT_WEIGHT,
  DEFAULT_LINE_HEIGHT,
  TREND_ICON_MARGIN_RIGHT,
  TREND_ICON_SIZE,
  TREND_VALUE_COLOR,
  VALUES_TEXT_Y_OFFSET,
  VALUE_MARGIN_RIGHT,
} from "../constants";
import { getInitialCoords } from "../utils/getInitialCoords";

const getAttrs = (config: MetricConfig, valueSize: number) => {
  const { initialX, initialY } = getInitialCoords(config);

  const x =
    initialX +
    CONTENT_X_OFFSET +
    valueSize +
    VALUE_MARGIN_RIGHT +
    TREND_ICON_SIZE +
    TREND_ICON_MARGIN_RIGHT;

  const y = initialY + VALUES_TEXT_Y_OFFSET;

  return {
    text: `${config.trend.value}%`,
    x,
    y,
    fill: TREND_VALUE_COLOR,
    fontSize: DEFAULT_FONT_SIZE,
    fontWeight: DEFAULT_FONT_WEIGHT,
    lineHeight: DEFAULT_LINE_HEIGHT,
  };
};

export const drawTrendValue = (
  config: MetricConfig,
  group: any,
  valueSize: number
) => {
  const attrs = getAttrs(config, valueSize);
  return group.addShape("text", {
    attrs,
    name: "trendValue",
    draggable: true,
  });
};
