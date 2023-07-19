/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */

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
  return group.addShape("image", {
    attrs,
    name: "expandIcon",
    draggable: true,
  });
};
