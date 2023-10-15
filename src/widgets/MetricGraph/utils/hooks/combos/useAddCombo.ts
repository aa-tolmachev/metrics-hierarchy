import { useDispatch } from "react-redux";
import { AppDispatch } from "../../../../../store";
import { useCallback } from "react";
import { addCombo } from "../../../../../store/reducers/combosReducer";
import { ComboItem } from "../../../../../store/reducers/types";

export const useAddCombo = () => {
  const dispatch = useDispatch<AppDispatch>();
  const addComboCb = useCallback(
    (combo: ComboItem) => dispatch(addCombo(combo)),
    [dispatch]
  );
  return addComboCb;
};
