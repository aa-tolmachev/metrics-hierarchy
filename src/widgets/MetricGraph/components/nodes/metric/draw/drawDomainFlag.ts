/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */

import { DrawFunction, GetAttrsFunction } from "./types";
import {
  CONTAINER_HEIGHT,
  DOMAIN_FLAG_COLORS,
  DOMAIN_FLAG_WIDTH,
} from "./constants";
import { getInitialCoords } from "./utils/getInitialCoords";

const getAttrs: GetAttrsFunction = (config) => {
  const configSize = config.size;
  const height = configSize ? configSize[1] : CONTAINER_HEIGHT;

  const { initialX: x, initialY: y } = getInitialCoords(config);

  const fill = DOMAIN_FLAG_COLORS[config.metricDomain];

  return {
    x,
    y,
    width: DOMAIN_FLAG_WIDTH,
    height,
    fill,
    radius: [4, 0, 0, 4],
  };
};

export const drawDomainFlag: DrawFunction = (config, group) => {
  const attrs = getAttrs(config);
  return group.addShape("rect", {
    attrs,
    name: "domainFlag",
    draggable: true,
  });
};
