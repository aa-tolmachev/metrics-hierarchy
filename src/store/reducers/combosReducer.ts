import { createSlice } from "@reduxjs/toolkit";
import { CombosState } from "./types";
import { addComboAction } from "../actions/combosActions";

const initialState: CombosState = {
  combos: [],
};

export const combosSlice = createSlice({
  name: "combos",
  initialState,
  reducers: {
    addCombo: addComboAction,
  },
});

export const { addCombo } = combosSlice.actions;

export const combosReducer = combosSlice.reducer;
