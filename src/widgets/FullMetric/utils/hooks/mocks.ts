import { MetricConfig } from "../../../../core/frontend/types/metric";
import { METRIC_TYPE } from "../../../MetricGraph/components";

export const METRIC_MOCK: MetricConfig = {
  id: "node-0",
  name: "Отток клиентов, прошедших через КЦ",
  description:
    "Стоимость обработки кейса = (процент времени на обработку кейса линии Х от всего времени линии Х * стоимость всего времени линии Х) + (процент времени на обработку кейса линии У * стоимость времени линии У) / количество кейсов",
  shortName: "Contact Rate",
  x: 200,
  y: 100,
  metricDomain: "finance",
  value: 10,
  type: METRIC_TYPE,
  trend: {
    trend: "up",
    value: 15,
  },
  owner: "XXXXXXXXXXXXXX",
  analyst: "Peter Nikitin",
  state: "done",
  link: "https://github.com/aa-tolmachev/metrics-hierarchy",
  dataSource: "table users",
  requestExample: "SELECT COUNT(DISTINCT Country) FROM Customers;",
  vertical: "Вертикаль",
  measurements: "Измерения",
  granularity: "Гранулярность",
};
