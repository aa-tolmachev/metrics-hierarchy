import { FC } from "react";

import { Descriptions } from "../../../../components/Descriptions/Descriptions";
import { useAppSelector } from "../../../../store/hooks/useAppSelector";
import { ChangeMetricFunc, EditedMetric } from "../../types";
import { EditMetricTrivia } from "./EditMetricTrivia";

interface MetricTriviaProps {
	editedMetric: EditedMetric | undefined;

	changeEditedMetric: ChangeMetricFunc;
}

const NO_VALUE = "—";

export const MetricTrivia: FC<MetricTriviaProps> = ({
	editedMetric,
	changeEditedMetric,
}) => {
	const { usedMetric } = useAppSelector((state) => state.fullMetric);

	if (editedMetric)
		return (
			<EditMetricTrivia
				editedMetric={editedMetric}
				changeEditedMetric={changeEditedMetric}
			/>
		);

	if (!usedMetric) return null;

	return (
		<Descriptions
			title="Параметры"
			value={[
				{
					label: "Формула расчёта",
					value: usedMetric.nameCalculation || NO_VALUE,
				},
				{
					label: "Продукт",
					value: usedMetric.product?.name ?? NO_VALUE,
				},
			]}
		/>
	);
};
