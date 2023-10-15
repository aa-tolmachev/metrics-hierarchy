import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../../../../store";
import { useCallback } from "react";
import { addCombo } from "../../../../../store/reducers/combosReducer";
import { ComboItem } from "../../../../../store/reducers/types";
import { addComboToGraph } from "../../../../../store/reducers/metricGraphReducer";

export const useAddCombo = () => {
  const dispatch = useDispatch<AppDispatch>();
  const selectedNodeIds = useSelector(
    (state: RootState) => state.selectedMetricSubGraph.subGraph.nodeIds
  );

  const addComboCb = useCallback(
    (combo: ComboItem) => {
      dispatch(addCombo(combo));
      dispatch(
        addComboToGraph({ nodeIds: selectedNodeIds, comboId: combo.id })
      );
    },
    [dispatch, selectedNodeIds]
  );

  return addComboCb;
};
