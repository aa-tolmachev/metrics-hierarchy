import {
  MetricEdge,
  ConnectionType,
} from "../../_models/merticGraph/metricEdge";
import { getEdgeStyle } from "./getEdgeStyle";
import { v4 as uuidv4 } from "uuid";

type GetEdge = (
  source: string,
  target: string,
  type: ConnectionType
) => MetricEdge;

/**
 * Returns the full Edge object.
 * @param {string} source - source Node
 * @param {string} target - target Node
 * @param {ConnectionType=} type - type of the edge
 */
export const getEdge: GetEdge = (source, target, type) => ({
  id: uuidv4(),
  source,
  target,
  connectionType: type,
  style: getEdgeStyle(type),
});
