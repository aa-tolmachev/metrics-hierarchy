export const isMetricPath = (path: string, metricId: string) => {
  const pathArray = path.split("/");
  if (pathArray.length > 2 && pathArray[2] === metricId) return true;
  return false;
};
