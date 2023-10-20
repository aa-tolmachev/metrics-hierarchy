import { createSlice } from "@reduxjs/toolkit";
import { CombosReducerState } from "./types";
import {
  addComboAction,
  deserializeCombosAction,
  removeCombosAction,
  serializeCombosAction,
} from "../actions/combosActions";

const initialState: CombosReducerState = {
  combos: [],
};

export const combosSlice = createSlice({
  name: "combos",
  initialState,
  reducers: {
    addCombo: addComboAction,
    serializeCombos: serializeCombosAction,
    deserializeCombos: deserializeCombosAction,
    removeCombos: removeCombosAction,
  },
});

export const { addCombo, serializeCombos, deserializeCombos, removeCombos } =
  combosSlice.actions;

export const combosReducer = combosSlice.reducer;
