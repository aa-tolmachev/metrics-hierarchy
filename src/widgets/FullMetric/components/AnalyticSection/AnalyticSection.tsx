import { InputText } from "primereact/inputtext";
import { FC } from "react";

import { Descriptions } from "../../../../components/Descriptions/Descriptions";
import { useAppSelector } from "../../../../store/hooks/useAppSelector";
import { MetricSectionEditableProps } from "../../types";
import {
	DataSourceParts,
	composeDataSource,
	parseDataSource,
} from "../../utils/dataSource";
import { QueryExample } from "./QueryExample/QueryExample";
import { getMetricInfoValue } from "./utils/getMetricInfoValue";

const DATA_SOURCE_FIELDS: { key: keyof DataSourceParts; label: string }[] = [
	{ key: "database", label: "База данных" },
	{ key: "schema", label: "Схема" },
	{ key: "table", label: "Таблица" },
];

export const AnalyticSection: FC<MetricSectionEditableProps> = ({
	editedMetric,
	changeEditedMetric,
}) => {
	const { usedMetric } = useAppSelector((state) => state.fullMetric);

	const dataSource = parseDataSource(
		editedMetric ? editedMetric.dataSource : usedMetric?.dataSource,
	);

	const dataSourceRows = DATA_SOURCE_FIELDS.map(({ key, label }) => ({
		label,
		value: editedMetric ? (
			<InputText
				type="text"
				value={dataSource[key]}
				onChange={(e) => {
					changeEditedMetric(
						"dataSource",
						composeDataSource({
							...dataSource,
							[key]: e.currentTarget.value.replace(/\./g, ""),
						}),
					);
				}}
			/>
		) : (
			getMetricInfoValue(dataSource[key], false)
		),
	}));

	return (
		<>
			<Descriptions
				title="Данные"
				value={[
					...dataSourceRows,
					{
						label: "Дашборд",
						value: editedMetric ? (
							<InputText
								type="text"
								value={editedMetric.refToBoard}
								onChange={(e) => {
									changeEditedMetric(
										"refToBoard",
										e.currentTarget.value,
									);
								}}
							/>
						) : usedMetric ? (
							getMetricInfoValue(
								usedMetric.refToBoard,
								true,
								true,
							)
						) : null,
					},
				]}
			/>
			<QueryExample
				metric={usedMetric}
				editedMetric={editedMetric}
				changeEditedMetric={changeEditedMetric}
			/>
		</>
	);
};
