import { MetricConfig } from "../../../../../../../core/types/metric";
import { CONTAINER_WIDTH, CONTAINER_HEIGHT } from "../constants";

export const getInitialCoords = (config: MetricConfig) => {
  const configSize = config.size;

  const containerWidth = configSize ? configSize[0] : CONTAINER_WIDTH;
  const containerHeight = configSize ? configSize[1] : CONTAINER_HEIGHT;

  const initialX = 0 - containerWidth / 2;
  const initialY = containerHeight / 2;

  return { initialX, initialY };
};
