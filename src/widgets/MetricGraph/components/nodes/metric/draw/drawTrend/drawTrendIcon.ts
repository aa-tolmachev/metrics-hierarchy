/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */

import {
  CONTENT_X_OFFSET,
  TREND_ICON_SIZE,
  VALUES_Y_OFFSET,
  VALUE_MARGIN_RIGHT,
} from "../constants";
import img from "../../../../../assets/trendUp.svg";
import { DrawFunctionFull, GetAttrsFunctionFull } from "../types";
import { getTextWidth } from "../../../../../../../utils/getTextWidth";

const getAttrs: GetAttrsFunctionFull = (config, initialCoords, group) => {
  const { x: initialX, y: initialY } = initialCoords;

  const context = group.cfg.canvas.cfg.context as CanvasRenderingContext2D;
  const valueWidth = getTextWidth(context, config.value.toString());
  const x = initialX + CONTENT_X_OFFSET + valueWidth + VALUE_MARGIN_RIGHT;
  const y = initialY + VALUES_Y_OFFSET + TREND_ICON_SIZE / 2;

  return {
    x,
    y,
    width: TREND_ICON_SIZE,
    height: TREND_ICON_SIZE,
    img,
  };
};

export const drawTrendIcon: DrawFunctionFull = (
  config,
  initialCoords,
  group
) => {
  const attrs = getAttrs(config, initialCoords, group);
  return group.addShape("image", {
    attrs,
    name: "trendIcon",
    draggable: true,
  });
};
