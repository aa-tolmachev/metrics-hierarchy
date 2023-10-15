import { useDispatch } from "react-redux";
import { SelectedEvent } from "../../../../../../../../core/frontend/types/events";
import { AppDispatch } from "../../../../../../../../store";
import { addSelectedMetricSubGraph } from "../../../../../../../../store/reducers/selectedMetricSubGraphReducer";
import { useCallback } from "react";
import { mapItem } from "./mapItem";

export const useSelectSubGraph = () => {
  const dispatch = useDispatch<AppDispatch>();

  const selectSubGraph = useCallback(
    (e: SelectedEvent) => {
      const { nodes, edges, combos } = e.selectedItems;
      dispatch(
        addSelectedMetricSubGraph({
          subGraph: {
            nodeIds: nodes.map(mapItem),
            edgeIds: edges.map(mapItem),
            comboIds: combos.map(mapItem),
          },
        })
      );
    },
    [dispatch]
  );

  return selectSubGraph;
};
