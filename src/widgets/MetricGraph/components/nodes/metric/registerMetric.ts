/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unsafe-return */

import Graphin from "@antv/graphin";
import { METRIC_TYPE } from "../..";
import { draw } from "./draw";

export const registerMetric = () => {
  Graphin.registerNode(METRIC_TYPE, {
    draw,
  });
};
