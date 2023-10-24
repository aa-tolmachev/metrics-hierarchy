import { PayloadAction } from "@reduxjs/toolkit";
import { SelectedMetricSubGraphState } from "../reducers/types";

export const addSelectedMetricSubGraphAction = (
  _: SelectedMetricSubGraphState,
  { payload }: PayloadAction<SelectedMetricSubGraphState>
) => payload;

export const clearSelectedMetricSubGraphAction =
  (): SelectedMetricSubGraphState => ({
    subGraph: {
      comboIds: [],
      nodeIds: [],
      edgeIds: [],
    },
  });
