import { ModelConfig } from "@antv/g6";
import { Metric } from "../../backend/_models/merticGraph/metric";

export type MetricConfig = Omit<ModelConfig, "size"> & Metric;
