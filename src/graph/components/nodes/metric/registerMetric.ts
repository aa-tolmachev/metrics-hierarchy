/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unsafe-return */

import Graphin from "@antv/graphin";
import { METRIC_TYPE, MetricConfig } from "../..";
import { drawMetricContainer } from "./draw/drawMetricContainer";
import { drawDomainFlag } from "./draw/drawDomainFlag";
import { drawHeading } from "./draw/drawHeading";
import { drawExpandIcon } from "./draw/drawExpandIcon";
import { drawValue } from "./draw/drawValue";
import { drawTrend } from "./draw/drawTrend";
import { getTextWidth } from "./draw/utils/getTextWidth";

export const registerMetric = () => {
  Graphin.registerNode(METRIC_TYPE, {
    draw(config: MetricConfig, group: any) {
      const keyshape = drawMetricContainer(config, group);
      drawDomainFlag(config, group);
      drawHeading(config, group);
      drawExpandIcon(config, group);

      const value = drawValue(config, group);
      const context = value.cfg.canvas.cfg.context;
      const valueWidth = getTextWidth(context, config.value.toString());

      drawTrend(config, group, valueWidth);
      return keyshape;
    },
  });
};
