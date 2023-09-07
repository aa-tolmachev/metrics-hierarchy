import { useSelector } from "react-redux";
import { RootState } from "../../../../../store";

export const useIsFromStorage = () => {
  const { source } = useSelector((state: RootState) => state.metricGraph);
  const isFromStorage = source === "localStorage";
  return isFromStorage;
};
