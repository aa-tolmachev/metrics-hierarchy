import { Edge, EdgeType } from "./types";
import { getEdgeStyle } from "./getEdgeStyle";

type GetEdge = (source: string, target: string, type?: EdgeType) => Edge;

/**
 * Returns the full Edge object.
 * @param {string} source - source Node
 * @param {string} target - target Node
 * @param {EdgeType=} type - type of the edge
 */
export const getEdge: GetEdge = (source, target, type) => ({
  source,
  target,
  style: getEdgeStyle(type),
});
