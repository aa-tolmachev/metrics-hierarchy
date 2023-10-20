import { useSelector } from "react-redux";
import { RootState } from "../../../../store";

export const useGraphData = () => {
  const { graph, source } = useSelector(
    (state: RootState) => state.metricGraph
  );

  if (!graph) {
    const emptyGraph = { nodes: [], edges: [] };
    return { graph: emptyGraph, source: undefined };
  }
  return { graph, source };
};
