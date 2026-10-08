import { Dropdown } from "primereact/dropdown";
import { FC } from "react";

import { Descriptions } from "../../../../components/Descriptions/Descriptions";
import { Pill } from "../../../../components/Pill/Pill";
import { useGetStatuses } from "../../../../core/backend/hooks/metrics/dictionaries/useGetStatuses";
import { useAppSelector } from "../../../../store/hooks/useAppSelector";
import { getStatusTone } from "../../../../utils/getStatusTone";
import { MetricSectionEditableProps } from "../../types";

export const ShortInfo: FC<MetricSectionEditableProps> = ({
	editedMetric,
	changeEditedMetric,
}) => {
	const { data: statuses } = useGetStatuses();

	const { usedMetric } = useAppSelector((state) => state.fullMetric);

	if (editedMetric) {
		return (
			<Descriptions
				value={[
					{
						label: "Статус",
						value: (
							<Dropdown
								value={editedMetric.statusId}
								options={statuses}
								onChange={(e) => {
									changeEditedMetric("statusId", e.value);
								}}
								optionValue="id"
								optionLabel="name"
								placeholder="Не выбран"
							/>
						),
					},
				]}
			/>
		);
	}

	if (!usedMetric?.status?.name) return null;

	const statusTone = getStatusTone(usedMetric.status.name);
	return (
		<div className="flex">
			<Pill color={statusTone.color} background={statusTone.background}>
				{usedMetric.status.name}
			</Pill>
		</div>
	);
};
