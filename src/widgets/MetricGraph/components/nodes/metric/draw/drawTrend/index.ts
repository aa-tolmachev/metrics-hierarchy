/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */

import { MetricConfig } from "../../types";
import { drawTrendIcon } from "./drawTrendIcon";
import { drawTrendValue } from "./drawTrendValue";

export const drawTrend = (
  config: MetricConfig,
  group: any,
  valueSize: number
) => ({
  icon: drawTrendIcon(config, group, valueSize),
  value: drawTrendValue(config, group, valueSize),
});
