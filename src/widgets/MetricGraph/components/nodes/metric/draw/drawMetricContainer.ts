import {
  CONTAINER_WIDTH,
  CONTAINER_HEIGHT,
  CONTAINER_BACKGROUND,
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
    fill: CONTAINER_BACKGROUND,
    radius: 4,
    shadowBlur: 10,
  };
};

export const drawMetricContainer: DrawFunction = (config, group) => {
  const attrs = getAttrs(config, group);
  // eslint-disable-next-line @typescript-eslint/no-unsafe-return, @typescript-eslint/no-unsafe-call
  return group.addShape("rect", {
    attrs,
    name: "container",
    draggable: true,
  });
};
