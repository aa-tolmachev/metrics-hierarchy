import { useDispatch } from "react-redux";
import { useEffectOnce } from "usehooks-ts";
import { AppDispatch } from "../../../../store";
import { deserializeMetricGraph } from "../../../../store/reducers/metricGraphReducer";
import { deserializeMetricSubGraphs } from "../../../../store/reducers/metricSubGraphsReducer";
import { deserializeCombos } from "../../../../store/reducers/combosReducer";

export const useDeserializeData = () => {
  const dispatch = useDispatch<AppDispatch>();

  useEffectOnce(() => {
    dispatch(deserializeMetricGraph());
    dispatch(deserializeMetricSubGraphs());
    dispatch(deserializeCombos());
  });
};
