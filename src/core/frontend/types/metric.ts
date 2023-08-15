import { ModelConfig } from "@antv/g6";
import { FullMetric } from "../../backend/_models/merticGraph/metric";

export type MetricConfig = Omit<ModelConfig, "size"> & FullMetric;
