import { ComboItem } from "../../../store/reducers/types";
import { getFromStorage } from "./utils/getFromStorage";
import { removeFromStorage } from "./utils/removeFromStorage";
import { setToStorage } from "./utils/setToStorage";

const combosKey = "METRIC-GRAPH-COMBOS";

export const getCachedCombos = (): ComboItem[] | undefined =>
  getFromStorage<ComboItem[]>(combosKey);

export const setCombos = (combos: ComboItem[]) =>
  setToStorage(combos, combosKey);

export const removeCombos = () => removeFromStorage(combosKey);
