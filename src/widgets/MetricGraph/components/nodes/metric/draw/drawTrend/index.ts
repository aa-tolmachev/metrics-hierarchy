/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */

import { DrawFunctionFull } from "../types";
import { drawTrendIcon } from "./drawTrendIcon";
import { drawTrendValue } from "./drawTrendValue";

export const drawTrend: DrawFunctionFull = (config, initialCoords, group) => ({
  icon: drawTrendIcon(config, initialCoords, group),
  value: drawTrendValue(config, initialCoords, group),
});
