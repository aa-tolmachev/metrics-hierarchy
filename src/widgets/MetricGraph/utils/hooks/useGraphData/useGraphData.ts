import { useDispatch, useSelector } from "react-redux";
import { useEffectOnce } from "usehooks-ts";
import { AppDispatch, RootState } from "../../../../../store";
import { deserializeMetricGraph } from "../../../../../store/reducers/metricGraphReducer";

export const useGraphData = () => {
  const dispatch = useDispatch<AppDispatch>();

  useEffectOnce(() => {
    dispatch(deserializeMetricGraph());
  });

  const graph = useSelector((state: RootState) => state.metricGraph.graph);

  return graph ?? { nodes: [], edges: [] };
};
