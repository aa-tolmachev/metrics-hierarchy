import { DrawFunctionFull, GetAttrsFunctionFull } from "./types";
import {
  CONTAINER_HEIGHT,
  DOMAIN_FLAG_COLORS,
  DOMAIN_FLAG_WIDTH,
} from "./constants";

const getAttrs: GetAttrsFunctionFull = (config, initialCoords) => {
  const configSize = config.size;
  const height = configSize ? configSize[1] : CONTAINER_HEIGHT;

  const { x, y } = initialCoords;

  const fill = DOMAIN_FLAG_COLORS["finance"];

  return {
    x,
    y,
    width: DOMAIN_FLAG_WIDTH,
    height,
    fill,
    radius: [4, 0, 0, 4],
  };
};

export const drawDomainFlag: DrawFunctionFull = (
  config,
  initialCoords,
  group
) => {
  const attrs = getAttrs(config, initialCoords);
  // eslint-disable-next-line @typescript-eslint/no-unsafe-return, @typescript-eslint/no-unsafe-call
  return group.addShape("rect", {
    attrs,
    name: "domainFlag",
    draggable: true,
  });
};
