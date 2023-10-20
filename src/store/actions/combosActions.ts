import { PayloadAction } from "@reduxjs/toolkit";
import { ComboItem, CombosReducerState } from "../reducers/types";
import {
  getCachedCombos,
  removeCombos,
  setCombos,
} from "../../core/frontend/localStorage/combos";

export const addComboAction = (
  state: CombosReducerState,
  { payload }: PayloadAction<ComboItem>
) => {
  state.combos.push(payload);
};

export const serializeCombosAction = (state: CombosReducerState) => {
  const { combos } = state;
  setCombos(combos);
};

export const deserializeCombosAction = () => {
  const combos = getCachedCombos();
  return { combos: combos ?? [] };
};

export const removeCombosAction = (): CombosReducerState => {
  removeCombos();
  return { combos: [] };
};
