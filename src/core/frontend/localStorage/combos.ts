import { ComboItem } from "../../../store/reducers/types";
import { getFromStorage } from "./utils/getFromStorage";
import { removeFromStorage } from "./utils/removeFromStorage";
import { setToStorage } from "./utils/setToStorage";

const combosKey = "METRIC-GRAPH-COMBOS";

const getCachedCombos = (): ComboItem[] | undefined =>
  getFromStorage<ComboItem[]>(combosKey);

const setCombos = (combos: ComboItem[]) => setToStorage(combos, combosKey);

const removeCombos = () => removeFromStorage(combosKey);
