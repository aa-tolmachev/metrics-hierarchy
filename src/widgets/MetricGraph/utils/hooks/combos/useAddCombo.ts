import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../../../../store";
import { useCallback } from "react";
import { addCombo } from "../../../../../store/reducers/combosReducer";
import { addComboToGraph } from "../../../../../store/reducers/metricGraphReducer";
import { ComboItem } from "../../../../../core/backend/_models/merticGraph/combo";

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
