import {
  CONTENT_X_OFFSET,
  HEADING_FONT_SIZE,
  TREND_ICON_SIZE,
  VALUES_Y_OFFSET,
  VALUE_MARGIN_RIGHT,
} from "../constants";
import img from "../../../../../assets/trendUp.svg";
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
  const x = initialX + CONTENT_X_OFFSET + valueWidth + VALUE_MARGIN_RIGHT;
  const y = initialY + VALUES_Y_OFFSET + 2;

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
  // eslint-disable-next-line @typescript-eslint/no-unsafe-return, @typescript-eslint/no-unsafe-call
  return group.addShape("image", {
    attrs,
    name: "trendIcon",
    draggable: true,
  });
};
