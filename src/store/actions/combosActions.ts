import { PayloadAction } from "@reduxjs/toolkit";
import { ComboItem, CombosState } from "../reducers/types";

export const addComboAction = (
  state: CombosState,
  { payload }: PayloadAction<ComboItem>
) => {
  state.combos.push(payload);
};
