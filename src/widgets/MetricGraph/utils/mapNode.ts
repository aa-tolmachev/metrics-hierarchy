import { INode } from "@antv/g6";
import { MetricNode } from "../../../core/frontend/types/metric";

export const mapNode = (value: INode): MetricNode | undefined => {
  const { _cfg } = value;
  if (!_cfg) return undefined;
  const matrix = _cfg.group?.cfg.totalMatrix as number[] | undefined;
  if (!matrix) return undefined;
  return {
    ...(_cfg.model as MetricNode),
    x: matrix[6] ?? 0,
    y: matrix[7] ?? 0,
  };
};
