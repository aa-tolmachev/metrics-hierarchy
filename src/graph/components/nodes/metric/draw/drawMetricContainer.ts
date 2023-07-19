/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */

import {
  CONTAINER_WIDTH,
  CONTAINER_HEIGHT,
  CONTAINER_COLOR,
} from "./constants";
import { DrawFunction, GetAttrsFunction } from "./types";

const getAttrs: GetAttrsFunction = (config) => {
  const configSize = config.size;

  const width = configSize ? configSize[0] : CONTAINER_WIDTH;
  const height = configSize ? configSize[1] : CONTAINER_HEIGHT;

  return {
    x: 0 - width / 2,
    y: height / 2,
    width,
    height,
    fill: CONTAINER_COLOR,
    radius: 4,
  };
};

export const drawMetricContainer: DrawFunction = (config, group) => {
  const attrs = getAttrs(config);
  return group.addShape("rect", {
    attrs,
    name: "container",
    draggable: true,
  });
};
