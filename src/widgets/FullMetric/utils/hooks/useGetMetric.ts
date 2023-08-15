import { useSelector } from "react-redux";
import { RootState } from "../../../../store";

export function useGetMetric(id: number) {
  const graph = useSelector((state: RootState) => state.metricGraph.graph);
  return graph?.nodes[id];
}
