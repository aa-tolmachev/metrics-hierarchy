import { InputText } from "primereact/inputtext";
import { FC } from "react";

import { Descriptions } from "../../../../components/Descriptions/Descriptions";
import { Typography } from "../../../../components/Typography/Typography";
import { useAppSelector } from "../../../../store/hooks/useAppSelector";
import { MetricSectionEditableProps } from "../../types";
import { QueryExample } from "./QueryExample/QueryExample";
import { getMetricInfoValue } from "./utils/getMetricInfoValue";

// import { Chart } from "primereact/chart";
// import { GRAPH_DATA_MOCK } from "../mocks";

export const AnalyticSection: FC<MetricSectionEditableProps> = ({
	editedMetric,
	changeEditedMetric,
}) => {
	const { usedMetric } = useAppSelector((state) => state.fullMetric);
	return (
		<div className="flex flex-column gap-5">
			<Typography component="h2">Аналитика</Typography>
			<Descriptions
				title="Информация о метрике"
				value={[
					{
						label: "Источник данных",
						value: editedMetric ? (
							<InputText
								type="text"
								value={editedMetric.dataSource}
								className="p-inputtext-sm"
								onChange={(e) => {
									changeEditedMetric(
										"dataSource",
										e.currentTarget.value,
									);
								}}
							/>
						) : usedMetric ? (
							getMetricInfoValue(usedMetric.dataSource, true)
						) : null,
					},
					{
						label: "Ссылка на борд метрики",
						value: editedMetric ? (
							<InputText
								type="text"
								className="p-inputtext-sm"
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
			{/* <div className="flex flex-column gap-5">
				<Typography component="h3">Значения метрики</Typography>
				<Chart type="line" data={GRAPH_DATA_MOCK} />
			</div> */}
		</div>
	);
};
