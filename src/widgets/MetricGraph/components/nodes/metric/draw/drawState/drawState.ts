/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */

import { DrawFunctionFull } from "../types";
import { drawStateBadge } from "./drawStateBadge";
import { drawStateName } from "./drawStateName";

export const drawState: DrawFunctionFull = (config, initialCoords, group) => {
  const badge = drawStateBadge(config, initialCoords, group);
  const name = drawStateName(config, initialCoords, group);
  return { badge, name };
};
