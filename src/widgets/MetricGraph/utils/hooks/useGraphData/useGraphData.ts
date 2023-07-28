import { useEffectOnce } from "usehooks-ts";
import { useDispatch } from "react-redux";
import { AppDispatch, RootState } from "../../../../../store";
import { deserializeMetricGraph } from "../../../../../store/reducers/metricGraphReducer";
import { useSelector } from "react-redux";

export const useGraphData = () => {
  const dispatch = useDispatch<AppDispatch>();

  useEffectOnce(() => {
    dispatch(deserializeMetricGraph());
  });

  const graph = useSelector((state: RootState) => state.metricGraph.graph);

  return graph ?? { nodes: [], edges: [] };
};
