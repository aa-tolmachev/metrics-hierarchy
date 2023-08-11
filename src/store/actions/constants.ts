import { MetricGraph } from "../../core/frontend/types/metric";
import { METRIC_TYPE, getEdge } from "../../widgets/MetricGraph/components";

export const MOCK_GRAPH: MetricGraph = {
  nodes: [
    {
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
    },
    {
      id: "node-1",
      name: "Cool Metric",
      x: 500,
      y: 100,
      metricDomain: "finance",
      value: 1000,
      type: METRIC_TYPE,
      trend: {
        trend: "up",
        value: 150,
      },
      owner: "Alexey",
      analyst: "Ivan Ivanov",
      state: "done",
    },
    {
      id: "node-2",
      name: "GREAT Metric",
      x: 500,
      y: 300,
      metricDomain: "finance",
      value: 10000,
      type: METRIC_TYPE,
      trend: {
        trend: "up",
        value: 1500,
      },
      owner: "test",
      analyst: "Dmitry",
      state: "done",
    },
  ],
  edges: [
    getEdge("node-0", "node-1"),
    getEdge("node-1", "node-2", "weakRelated"),
  ],
};
