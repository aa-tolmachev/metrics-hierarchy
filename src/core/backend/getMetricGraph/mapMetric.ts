import { RawMetric, MetricNode } from "../_models/merticGraph/metric";

const mapValueWithNan = (value: string) =>
  value === "nan" ? undefined : value;

export const mapMetric = (raw: RawMetric, index: number): MetricNode => ({
  ...raw,
  id: index.toString(),
  metric: mapValueWithNan(raw.metric),
  slices: mapValueWithNan(raw.slices),
  metricType: raw.type,
  type: "metric",
});
