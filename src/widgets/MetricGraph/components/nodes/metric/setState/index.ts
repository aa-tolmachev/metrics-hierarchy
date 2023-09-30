/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */

import { ACTIVE_SHADOW_COLOR } from "../draw/constants";
import { getShapes } from "./getShapes";

export const setState = (name: string, _: any, node: any) => {
  const { container, collapseBadge, collapsePlus } = getShapes(node);
  switch (name) {
    case "active":
      container.attr("shadowColor", ACTIVE_SHADOW_COLOR);
      break;
    case "inactive":
      container.attr("shadowColor", undefined);
      break;
    default:
      container.attr("shadowColor", undefined);
  }
};
