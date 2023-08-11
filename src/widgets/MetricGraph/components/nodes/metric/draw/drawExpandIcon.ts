import {
  CONTAINER_HEIGHT,
  CONTAINER_WIDTH,
  EXPAND_ICON_SIZE,
  METRIC_CONTENT_PADDING,
} from "./constants";
import { DrawFunction, GetAttrsFunction } from "./types";
import img from "../../../../assets/expand.svg";

const getAttrs: GetAttrsFunction = (config) => {
  const configSize = config.size;

  const containerWidth = configSize ? configSize[0] : CONTAINER_WIDTH;
  const containerHeight = configSize ? configSize[1] : CONTAINER_HEIGHT;

  const x =
    containerWidth / 2 - EXPAND_ICON_SIZE - METRIC_CONTENT_PADDING.right;
  const y = containerHeight / 2 + METRIC_CONTENT_PADDING.top;

  return {
    x,
    y,
    width: EXPAND_ICON_SIZE,
    height: EXPAND_ICON_SIZE,
    img,
  };
};

export const drawExpandIcon: DrawFunction = (config, group) => {
  const attrs = getAttrs(config);
  // eslint-disable-next-line @typescript-eslint/no-unsafe-return, @typescript-eslint/no-unsafe-call
  return group.addShape("image", {
    attrs,
    name: "expandIcon",
    draggable: true,
  });
};
