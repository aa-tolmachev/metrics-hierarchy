import { v4 as uuidv4 } from "uuid";
import { ComboItem } from "../../../core/backend/_models/merticGraph/combo";

export const createCombo = (): ComboItem => {
  const id = uuidv4();
  return {
    id,
    label: `Combo ${id}`,
  };
};
