import { RawMetric, MetricNode } from "../_models/merticGraph/metric";

const mapValueWithNan = (value: string) =>
  value === "nan" ? undefined : value;

export const mapMetric = (raw: RawMetric, index: number): MetricNode => ({
  ...raw,
  id: index.toString(),
  shortName: raw.metric,
  description: raw.methodology,
  type: "metric",
  owner: "Alexey",
  analyst: "Andrey",
  metricDomain: raw.type,
  state: "inProgress",
  value: 3000,
  trend: {
    trend: "up",
    value: 15,
  },
  dataSource: "table",
  link: "https://www.google.com/",
  requestExample: "SELECT * FROM table_name;",
  vertical: mapValueWithNan(raw.slices),
  measurements: "Lorem ipsum",
  granularity: "Lorem ipsum",
  comboId: "comboA",
});
