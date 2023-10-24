import { removeCombos } from "../../../../../../store/reducers/combosReducer";
import { removeCombosFromGraph } from "../../../../../../store/reducers/metricGraphReducer";
import { Graph } from "@antv/g6";
import { AppDispatch } from "../../../../../../store";

export const createDeletingCombosBehavior = (
  graph: Graph,
  dispatch: AppDispatch
) =>
  document.addEventListener("keydown", (e) => {
    if (e.key !== "Delete") return;
    const selectedCombos = graph.findAllByState("combo", "selected");
    const selectedIds = selectedCombos.map((combo) => combo.get<string>("id"));
    dispatch(removeCombos(selectedIds));
    dispatch(removeCombosFromGraph(selectedIds));
  });
