import { FC } from "react";

import { Typography } from "../../../../components/Typography/Typography";
import { useAppSelector } from "../../../../store/hooks/useAppSelector";
import { ChangeMetricFunc, EditedMetric } from "../../types";
import { EditMetricTrivia } from "./EditMetricTrivia";

interface MetricTriviaProps {
	editedMetric: EditedMetric | undefined;

	changeEditedMetric: ChangeMetricFunc;
}

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

	if (usedMetric) {
		return (
			<div className="grid">
				<Typography className="col-4" component="p">
					<Typography component="b">Ранг метрики:</Typography>{" "}
					<Typography component="span">
						{usedMetric.rank.id}
					</Typography>
				</Typography>
				<Typography className="col-4" component="p">
					<Typography component="b">Постфикс:</Typography>{" "}
					<Typography component="span">
						{usedMetric.valuePostfix}
					</Typography>
				</Typography>
				<Typography className="col-4" component="p">
					<Typography component="b">Имя расчета:</Typography>{" "}
					<Typography component="span">
						{usedMetric.nameCalculation}
					</Typography>
				</Typography>
				<Typography className="col-4" component="p">
					<Typography component="b">Продукт:</Typography>{" "}
					<Typography component="span">
						{usedMetric.product?.name ?? "нет"}
					</Typography>
				</Typography>
				<Typography className="col-4" component="p">
					<Typography component="b">Платформа:</Typography>{" "}
					<Typography component="span">
						{usedMetric.platform?.name ?? "нет"}
					</Typography>
				</Typography>
				<Typography className="col-4" component="p">
					<Typography component="b">Канал привлечения:</Typography>{" "}
					<Typography component="span">
						{usedMetric.attractionChannel?.name ?? "нет"}
					</Typography>
				</Typography>
				<Typography className="col-4" component="p">
					<Typography component="b">
						Уровень в Иерархии Метрик:
					</Typography>{" "}
					<Typography component="span">
						{usedMetric.level?.name ?? "нет"}
					</Typography>
				</Typography>
			</div>
		);
	}

	return null;
};
