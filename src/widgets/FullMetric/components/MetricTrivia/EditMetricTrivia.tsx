import { Dropdown } from "primereact/dropdown";
import { InputTextarea } from "primereact/inputtextarea";
import { FC } from "react";

import { Descriptions } from "../../../../components/Descriptions/Descriptions";
import { useGetProducts } from "../../../../core/backend/hooks/metrics/dictionaries/useGetProducts";
import { ChangeMetricFunc, EditedMetric } from "../../types";

interface EditMetricTriviaProps {
	editedMetric: EditedMetric;

	changeEditedMetric: ChangeMetricFunc;
}

export const EditMetricTrivia: FC<EditMetricTriviaProps> = ({
	editedMetric,
	changeEditedMetric,
}) => {
	const { data: products } = useGetProducts();

	return (
		<Descriptions
			title="Параметры"
			value={[
				{
					label: "Формула расчёта",
					value: (
						<InputTextarea
							autoResize
							rows={2}
							value={editedMetric.nameCalculation}
							onChange={(e) => {
								changeEditedMetric(
									"nameCalculation",
									e.target.value,
								);
							}}
						/>
					),
				},
				{
					label: "Продукт",
					value: (
						<Dropdown
							value={editedMetric.productId}
							options={products}
							optionLabel="name"
							optionValue="id"
							placeholder="Не выбран"
							onChange={(e) => {
								changeEditedMetric("productId", e.value);
							}}
						/>
					),
				},
			]}
		/>
	);
};
