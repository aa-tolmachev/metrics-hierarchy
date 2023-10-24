import { PayloadAction } from "@reduxjs/toolkit";
import { CombosReducerState } from "../reducers/types";
import {
  getCachedCombos,
  removeCombos,
  setCombos,
} from "../../core/frontend/localStorage/combos";
import { ComboItem } from "../../core/backend/_models/merticGraph/combo";

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

export const removeAllCombosAction = (): CombosReducerState => {
  removeCombos();
  return { combos: [] };
};

export const removeCombosAction = (
  state: CombosReducerState,
  { payload: ids }: PayloadAction<string[]>
) => {
  const { combos } = state;
  const newCombos = combos.filter((combo) => !ids.includes(combo.id));
  return { combos: newCombos };
};
