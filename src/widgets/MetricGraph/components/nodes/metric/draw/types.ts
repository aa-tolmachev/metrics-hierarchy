import { Group } from "../../../../../../core/frontend/types/group";
import { MetricConfig } from "../../../../../../core/frontend/types/metric";

export interface Coords {
  x: number;
  y: number;
}
export type DrawFunction = (config: MetricConfig, group: Group) => any;

export type DrawFunctionFull = (
  config: MetricConfig,
  initialCoords: Coords,
  group: Group
) => any;

export type GetAttrsFunction = (config: MetricConfig, group?: Group) => object;

export type GetAttrsFunctionFull = (
  config: MetricConfig,
  initialCoords: Coords,
  group?: Group
) => object;
