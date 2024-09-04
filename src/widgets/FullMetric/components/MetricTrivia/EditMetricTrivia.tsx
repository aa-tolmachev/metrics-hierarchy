import { Dropdown } from "primereact/dropdown";
import { InputNumber } from "primereact/inputnumber";
import { InputText } from "primereact/inputtext";
import { FC } from "react";

import { Typography } from "../../../../components/Typography/Typography";
import { useGetAttractionChannels } from "../../../../core/backend/hooks/metrics/dictionaries/useGetAttractionChannels";
import { useGetLevels } from "../../../../core/backend/hooks/metrics/dictionaries/useGetLevels";
import { useGetPlatforms } from "../../../../core/backend/hooks/metrics/dictionaries/useGetPlatforms";
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
	const { data: platforms } = useGetPlatforms();
	const { data: attractionChannels } = useGetAttractionChannels();
	const { data: levels } = useGetLevels();

	return (
		<div className="flex flex-column gap-3">
			<div className="flex gap-2 align-items-center">
				<Typography component="span">Ранг метрики:</Typography>
				<InputNumber
					value={editedMetric.rankId}
					onChange={(e) => {
						changeEditedMetric("rankId", e.value ?? undefined);
					}}
				/>
			</div>
			<div className="flex gap-2 align-items-center">
				<Typography component="span">Постфикс:</Typography>
				<InputText
					value={editedMetric.valuePostfix}
					onChange={(e) => {
						changeEditedMetric("valuePostfix", e.target.value);
					}}
				/>
			</div>
			<div className="flex gap-2 align-items-center">
				<Typography component="span">Имя расчета:</Typography>
				<InputText
					value={editedMetric.nameCalculation}
					onChange={(e) => {
						changeEditedMetric("nameCalculation", e.target.value);
					}}
				/>
			</div>
			{products && (
				<div className="flex gap-2 align-items-center">
					<Typography component="span">Продукт:</Typography>
					<Dropdown
						value={editedMetric.productId}
						options={products}
						optionLabel="name"
						optionValue="id"
						onChange={(e) => {
							changeEditedMetric("productId", e.value);
						}}
					/>
				</div>
			)}
			{platforms && (
				<div className="flex gap-2 align-items-center">
					<Typography component="span">Платформа:</Typography>
					<Dropdown
						value={editedMetric.platformId}
						options={platforms}
						optionLabel="name"
						optionValue="id"
						onChange={(e) => {
							changeEditedMetric("platformId", e.value);
						}}
					/>
				</div>
			)}
			{attractionChannels && (
				<div className="flex gap-2 align-items-center">
					<Typography component="span">Канал привлечения:</Typography>
					<Dropdown
						value={editedMetric.attractionChannelId}
						options={attractionChannels}
						optionLabel="name"
						optionValue="id"
						onChange={(e) => {
							changeEditedMetric("attractionChannelId", e.value);
						}}
					/>
				</div>
			)}
			{levels && (
				<div className="flex gap-2 align-items-center">
					<Typography component="span">
						Уровень в Иерархии Метрик:
					</Typography>
					<Dropdown
						value={editedMetric.levelId}
						options={levels}
						optionLabel="name"
						optionValue="id"
						onChange={(e) => {
							changeEditedMetric("levelId", e.value);
						}}
					/>
				</div>
			)}
		</div>
	);
};
