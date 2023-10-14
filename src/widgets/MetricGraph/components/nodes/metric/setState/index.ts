/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */

import { getShapes } from "./getShapes";
import { setCollapse } from "./setCollapse";

export const setState = (name: string, _: any, node: any) => {
  const { container, collapseBadge, collapsePlus } = getShapes(node);
  switch (name) {
    case "active":
      container.attr("shadowColor", "#474747");
      break;
    case "inactive":
      container.attr("shadowColor", undefined);
      break;
    case "collapsed":
      setCollapse(collapseBadge, collapsePlus);
      break;
    default:
      container.attr("shadowColor", undefined);
  }
};
