/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */

import { MetricConfig } from "../../../../../../../core/types/metric";
import {
  CONTENT_X_OFFSET,
  TREND_ICON_SIZE,
  VALUES_Y_OFFSET,
  VALUE_MARGIN_RIGHT,
} from "../constants";
import img from "../../../../../assets/trendUp.svg";
import { getInitialCoords } from "../utils/getInitialCoords";

const getAttrs = (config: MetricConfig, valueSize: number) => {
  const { initialX, initialY } = getInitialCoords(config);

  const x = initialX + CONTENT_X_OFFSET + valueSize + VALUE_MARGIN_RIGHT;
  const y = initialY + VALUES_Y_OFFSET + TREND_ICON_SIZE / 2;

  return {
    x,
    y,
    width: TREND_ICON_SIZE,
    height: TREND_ICON_SIZE,
    img,
  };
};

export const drawTrendIcon = (
  config: MetricConfig,
  group: any,
  valueSize: number
) => {
  const attrs = getAttrs(config, valueSize);
  return group.addShape("image", {
    attrs,
    name: "trendIcon",
    draggable: true,
  });
};
