/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */

import { DrawFunctionFull } from "../types";
import { drawOwnerBadge } from "./drawOwnerBadge";
import { drawOwnerName } from "./drawOwnerName";

export const drawOwner: DrawFunctionFull = (config, initialCoords, group) => {
  const ownerBadge = drawOwnerBadge(config, initialCoords, group);
  const ownerName = drawOwnerName(config, initialCoords, group);
  return { ownerBadge, ownerName };
};
