import { Card } from "primereact/card";
import { Dropdown } from "primereact/dropdown";
import { FC } from "react";

import { Typography } from "../../../../components/Typography/Typography";
import { useGetUsers } from "../../../../core/backend/hooks/metrics/dictionaries/useGetUsers";
import { useAppSelector } from "../../../../store/hooks/useAppSelector";
import { MetricSectionEditableProps } from "../../types";
import styles from "./OwnerCards.module.scss";

export const OwnerCards: FC<MetricSectionEditableProps> = ({
	editedMetric,
	changeEditedMetric,
}) => {
	const { data: owners } = useGetUsers("");
	const { data: analysts } = useGetUsers("");
	const { usedMetric } = useAppSelector((state) => state.fullMetric);
	return (
		<div className="flex flex-column gap-3">
			<Typography component="h2">Ответственные</Typography>
			<div className="flex gap-3">
				<Card className={styles.ownerCard} title="Владелец метрики">
					{editedMetric ? (
						<Dropdown
							className="w-full"
							filter
							value={editedMetric.ownerId}
							options={owners}
							onChange={(e) => {
								changeEditedMetric("ownerId", e.value);
							}}
							optionLabel="name"
							optionValue="id"
						/>
					) : usedMetric ? (
						usedMetric.owner?.name
					) : null}
				</Card>
				<Card className={styles.ownerCard} title="Аналитик">
					{editedMetric ? (
						<Dropdown
							className="w-full"
							filter
							value={editedMetric.analystId}
							options={analysts}
							onChange={(e) => {
								changeEditedMetric("analystId", e.value);
							}}
							optionLabel="name"
							optionValue="id"
						/>
					) : usedMetric ? (
						usedMetric.analyst?.name
					) : null}
				</Card>
			</div>
		</div>
	);
};
