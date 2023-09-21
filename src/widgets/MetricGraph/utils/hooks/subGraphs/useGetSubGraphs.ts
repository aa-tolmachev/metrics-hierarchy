import { useSelector } from "react-redux";
import { RootState } from "../../../../../store";

export const useGetSubGraphs = () => {
  const { subGraphs } = useSelector(
    (state: RootState) => state.metricSubGraphs
  );
  return subGraphs;
};
