import { MetricEdge, MetricEdgeType } from "./types";
import { getEdgeStyle } from "./getEdgeStyle";

type GetEdge = (
  source: string,
  target: string,
  type?: MetricEdgeType
) => MetricEdge;

/**
 * Returns the full Edge object.
 * @param {string} source - source Node
 * @param {string} target - target Node
 * @param {MetricEdgeType=} type - type of the edge
 */
export const getEdge: GetEdge = (source, target, type) => ({
  source,
  target,
  style: getEdgeStyle(type),
});
