const buildPath = (path: string) => (endPoint: string) =>
  `/${path}/${endPoint}`;

export const buildMetricPath = buildPath("metrics");
