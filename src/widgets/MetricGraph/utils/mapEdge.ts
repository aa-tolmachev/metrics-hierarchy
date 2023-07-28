import { IEdge } from "@antv/g6";

export const mapEdge = (edge: IEdge) => {
  const { _cfg } = edge;
  if (!_cfg) return undefined;
  const { model } = _cfg;
  if (!model) return undefined;
  const { source, target, style } = model;
  return { source, target, style };
};
