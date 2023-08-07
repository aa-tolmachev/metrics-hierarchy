/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unsafe-return */

import { drawDomainFlag } from "./drawDomainFlag";
import { drawExpandIcon } from "./drawExpandIcon";
import { drawHeading } from "./drawHeading";
import { drawMetricContainer } from "./drawMetricContainer";
import { drawOwner } from "./drawOwner/drawOwner";
import { drawState } from "./drawState/drawState";
import { drawTrend } from "./drawTrend";
import { drawValue } from "./drawValue";
import { DrawFunctionFull } from "./types";
import { getInitialCoords } from "./utils/getInitialCoords";

export const draw: DrawFunctionFull = (config, group) => {
  const keyshape = drawMetricContainer(config, group);
  const initialCoords = getInitialCoords(config);
  drawDomainFlag(config, initialCoords, group);
  drawHeading(config, initialCoords, group);
  drawExpandIcon(config, group);
  drawValue(config, initialCoords, group);
  drawTrend(config, initialCoords, group);
  drawOwner(config, initialCoords, group);
  drawState(config, initialCoords, group);
  return keyshape;
};
