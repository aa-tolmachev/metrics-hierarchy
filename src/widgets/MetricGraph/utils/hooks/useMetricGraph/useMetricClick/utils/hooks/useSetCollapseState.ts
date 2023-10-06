import { useSelector } from "react-redux";
import { RootState } from "../../../../../../../../store";
import { IG6GraphEvent } from "@antv/graphin";
import { useCallback } from "react";

export const useSetCollapseState = () => {
  const subGraphs = useSelector(
    (state: RootState) => state.metricSubGraphs.subGraphs
  );

  const setCollapseState = useCallback(
    (e: IG6GraphEvent) => {
      const { item } = e;
      if (!item) return;

      const type = item.get<"edge" | "node">("type");
      if (type === "edge") return;

      const id = item.get<"string">("id");
      if (subGraphs.find((subGraph) => subGraph.id === id))
        item.setState("collapsed", true);
    },
    [subGraphs]
  );

  return setCollapseState;
};
