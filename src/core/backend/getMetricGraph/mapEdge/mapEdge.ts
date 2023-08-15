import {
  MetricEdge,
  RawMetricEdge,
} from "../../_models/merticGraph/metricEdge";
import { getEdge } from "./getEdge";

export const mapEdge = (raw: RawMetricEdge): MetricEdge =>
  getEdge(raw.from.toString(), raw.to.toString(), raw.type);
