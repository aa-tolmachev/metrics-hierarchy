import { MetricConfig } from "../../..";

export type DrawFunction = (config: MetricConfig, group: any) => any;

export type GetAttrsFunction = (config: MetricConfig) => object;
