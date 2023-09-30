import { useDispatch, useSelector } from "react-redux";
import { useEffectOnce } from "usehooks-ts";
import { AppDispatch, RootState } from "../../../../store";
import { deserializeMetricGraph } from "../../../../store/reducers/metricGraphReducer";
import { deserializeMetricSubGraphs } from "../../../../store/reducers/metricSubGraphsReducer";

export const useGraphData = () => {
  const dispatch = useDispatch<AppDispatch>();

  useEffectOnce(() => {
    dispatch(deserializeMetricGraph());
    dispatch(deserializeMetricSubGraphs());
  });

  const { graph, source } = useSelector(
    (state: RootState) => state.metricGraph
  );

  if (!graph) {
    const emptyGraph = { nodes: [], edges: [] };
    return { graph: emptyGraph, source: undefined };
  }
  return { graph, source };
};
