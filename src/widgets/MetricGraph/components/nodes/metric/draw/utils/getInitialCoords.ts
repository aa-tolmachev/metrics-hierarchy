import { MetricConfig } from "../../../../../../../core/types/metric";
import { CONTAINER_WIDTH, CONTAINER_HEIGHT } from "../constants";
import { Coords } from "../types";

// gets X and Y coords of top left corner of metric node
export const getInitialCoords = (config: MetricConfig): Coords => {
  const configSize = config.size;

  const containerWidth = configSize ? configSize[0] : CONTAINER_WIDTH;
  const containerHeight = configSize ? configSize[1] : CONTAINER_HEIGHT;

  const x = 0 - containerWidth / 2;
  const y = containerHeight / 2;

  return { x, y };
};
