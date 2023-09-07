import { useState } from "react";

export type GraphDirection = "TB" | "BT" | "LR" | "RL";

export const useGraphDirection = () => {
  const state = useState<GraphDirection>("TB");
  return state;
};
