import { PayloadAction } from "@reduxjs/toolkit";
import { MetricSubGraph } from "../../core/backend/_models/merticGraph/metricGraph";
import { MetricSubGraphsReducerState } from "../reducers/types";

export const saveMetricSubGraphAction = (
  state: MetricSubGraphsReducerState,
  { payload }: PayloadAction<MetricSubGraph>
) => {
  state.subGraphs.push(payload);
};

export const removeMetricSubGraphAction = (
  state: MetricSubGraphsReducerState,
  { payload: id }: PayloadAction<string>
): MetricSubGraphsReducerState => {
  const subGraphs = state.subGraphs.filter((subGraph) => subGraph.id !== id);
  return { subGraphs };
};
