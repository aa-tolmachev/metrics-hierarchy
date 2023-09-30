import { useDispatch } from "react-redux";
import { AppDispatch } from "../../../../../store";
import { removeMetricSubGraph } from "../../../../../store/reducers/metricSubGraphsReducer";
import { addSubGraphToMetricGraph } from "../../../../../store/reducers/metricGraphReducer";
import { MetricGraph } from "../../../../../core/backend/_models/merticGraph/metricGraph";

export const useExpandSubGraph = () => {
  const dispatch = useDispatch<AppDispatch>();
  const expand = (nodeId: string, subGraph: MetricGraph) => {
    dispatch(removeMetricSubGraph(nodeId));
    dispatch(addSubGraphToMetricGraph(subGraph));
  };
  return expand;
};
