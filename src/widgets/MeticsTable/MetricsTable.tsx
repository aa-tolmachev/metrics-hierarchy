import { useRouter } from "next/router";
import { Column } from "primereact/column";
import { DataTable } from "primereact/datatable";
import { Paginator } from "primereact/paginator";
import { FC, useMemo, useState } from "react";

import { useGetMetricGraphs } from "../../core/backend/hooks/metricGraphs/useGetMetricGraphs";
import { useGetLevels } from "../../core/backend/hooks/metrics/dictionaries/useGetLevels";
import { useGetProducts } from "../../core/backend/hooks/metrics/dictionaries/useGetProducts";
import { useGetTypes } from "../../core/backend/hooks/metrics/dictionaries/useGetTypes";
import { useGetUsers } from "../../core/backend/hooks/metrics/dictionaries/useGetUsers";
import { useDeleteMetric } from "../../core/backend/hooks/metrics/useDeleteMetric";
import { Metric } from "../../hierarchy-metric-client";
import { SetState } from "../../utils";
import styles from "./MetricsTable.module.scss";
import { MetricDashboardTemplate } from "./components/MetricDashboardTemplate";
import { MetricDeleteTemplate } from "./components/MetricDeleteTemplate";
import { MetricDescriptionTemplate } from "./components/MetricDescriptionTemplate";
import { MetricEditTemplate } from "./components/MetricEditTemplate";
import { getMetricFilterGraphs } from "./components/MetricFilterGraphs";
import { getMetricFilterInput } from "./components/MetricFilterInput";
import { getMetricFilterLevel } from "./components/MetricFilterLevel";
import { getMetricFilterOwner } from "./components/MetricFilterOwner";
import { getMetricFilterProduct } from "./components/MetricFilterProduct";
import { getMetricFilterType } from "./components/MetricFilterType";
import { QueryExampleTemplate } from "./components/QueryExampleTemplate";
import { mapMetricToTableData } from "./utils/mapMetricToTableData";

interface MetricsTableProps {
	metrics: Metric[];
	filters: any;

	setFilters: SetState<any>;
	reloadMetrics: VoidFunction;
}

const ROWS_COUNT = 10;

export const MetricsTable: FC<MetricsTableProps> = ({
	metrics,
	filters,
	setFilters,
	reloadMetrics,
}) => {
	const router = useRouter();
	const metricDelete = useDeleteMetric();

	const [offset, setOffset] = useState(0);

	const metricData = useMemo(
		() =>
			metrics
				.slice(offset, offset + ROWS_COUNT)
				.map(mapMetricToTableData(router, metricDelete, reloadMetrics)),
		[offset, metricDelete, metrics, reloadMetrics, router],
	);

	const { data: owners } = useGetUsers("Owner");
	const { data: types } = useGetTypes();
	const { data: graphs } = useGetMetricGraphs();
	const { data: products } = useGetProducts();
	const { data: levels } = useGetLevels();

	return (
		<>
			<DataTable
				value={metricData}
				className={styles.table}
				filterDisplay="row"
				onFilter={() => undefined}
			>
				<Column
					field="onMetricDelete"
					header=""
					body={MetricDeleteTemplate}
				/>
				<Column
					field="onMetricEdit"
					header=""
					body={MetricEditTemplate}
				/>
				<Column field="status" header="Статус метрики" />
				<Column
					field="product"
					header="Продукт/Вертикаль"
					filter
					className={styles.filterHeader}
					filterElement={getMetricFilterProduct(
						filters.product,
						products,
						setFilters,
					)}
				/>
				<Column
					field="name"
					header="Название метрики"
					filter
					className={styles.filterHeader}
					filterElement={getMetricFilterInput((value: string) => {
						setFilters((prev: any) => ({
							...prev,
							name: value,
						}));
					})}
				/>
				<Column
					field="label"
					header="Краткое обозначение"
					filter
					className={styles.filterHeader}
					filterElement={getMetricFilterInput((value: string) => {
						setFilters((prev: any) => ({
							...prev,
							label: value,
						}));
					})}
				/>
				<Column
					field="type"
					header="Тип метрики"
					filter
					className={styles.filterHeader}
					filterElement={getMetricFilterType(
						filters.type,
						types,
						setFilters,
					)}
				/>
				<Column
					field="description"
					className={styles.descriptionHeader}
					header="Описание"
					body={MetricDescriptionTemplate}
				/>
				<Column
					field="owner"
					header="Владелец метрики"
					filter
					filterElement={getMetricFilterOwner(
						filters.owner,
						owners,
						setFilters,
					)}
					className={styles.filterHeader}
				/>
				<Column
					field="dataSource"
					header="Источник данных для расчета"
					filter
					className={styles.filterHeader}
					filterElement={getMetricFilterInput((value: string) => {
						setFilters((prev: any) => ({
							...prev,
							dataSource: value,
						}));
					})}
				/>
				<Column
					field="refToBord"
					header="Ссылка на дашборд"
					body={MetricDashboardTemplate}
				/>
				<Column
					field="queryExample"
					header="Пример запроса для расчета метрики"
					className={styles.queryHeader}
					body={QueryExampleTemplate}
				/>
				<Column
					field="graphs"
					header="Принадлежность к графу"
					filter
					className={styles.filterHeader}
					filterElement={getMetricFilterGraphs(
						filters.graphs,
						graphs,
						setFilters,
					)}
				/>
				<Column
					field="level"
					header="Уровень в Иерархии"
					filter
					className={styles.filterHeader}
					filterElement={getMetricFilterLevel(
						filters.level,
						levels,
						setFilters,
					)}
				/>
				<Column
					field="rank"
					header="Ранг метрики"
					filter
					className={styles.filterHeader}
					filterElement={getMetricFilterInput((value: string) => {
						setFilters((prev: any) => ({
							...prev,
							rank: value,
						}));
					})}
				/>
			</DataTable>
			<Paginator
				first={offset}
				rows={ROWS_COUNT}
				totalRecords={metrics.length}
				onPageChange={(e) => {
					setOffset(e.first);
					window.scrollTo({
						top: 0,
						behavior: "smooth",
					});
				}}
			/>
		</>
	);
};
