import { MetricConfig } from "../../../../../../core/types/metric";

export interface Coords {
  x: number;
  y: number;
}
export type DrawFunction = (config: MetricConfig, group: any) => any;

export type DrawFunctionFull = (
  config: MetricConfig,
  initialCoords: Coords,
  group: any
) => any;

export type GetAttrsFunction = (config: MetricConfig, group?: any) => object;

export type GetAttrsFunctionFull = (
  config: MetricConfig,
  initialCoords: Coords,
  group?: any
) => object;
