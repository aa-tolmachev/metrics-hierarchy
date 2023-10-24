import { useSelector } from "react-redux";
import { RootState } from "../../../../../store";

export const useCombos = () => {
  const { combos } = useSelector((state: RootState) => state.combos);
  return combos;
};
