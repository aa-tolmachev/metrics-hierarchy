import { Dropdown } from "primereact/dropdown";
import { InputText } from "primereact/inputtext";
import { FC, ReactNode } from "react";

import { LargeBadge } from "../../../../components/LargeBadge/LargeBadge";
import { TextTooltip } from "../../../../components/TextTooltip/TextTooltip";
import { Typography } from "../../../../components/Typography/Typography";
import { useGetStatuses } from "../../../../core/backend/hooks/metrics/dictionaries/useGetStatuses";
import { useGetTypes } from "../../../../core/backend/hooks/metrics/dictionaries/useGetTypes";
import { useAppSelector } from "../../../../store/hooks/useAppSelector";
import { MetricSectionEditableProps } from "../../types";

const ShortInfoWrapper: FC<{ children: ReactNode }> = ({ children }) => {
	return <div className="flex gap-2">{children}</div>;
};

export const ShortInfo: FC<MetricSectionEditableProps> = ({
	editedMetric,
	changeEditedMetric,
}) => {
	const { data: statuses } = useGetStatuses();
	const { data: types } = useGetTypes();

	const { usedMetric } = useAppSelector((state) => state.fullMetric);

	if (editedMetric) {
		return (
			<ShortInfoWrapper>
				<div className="flex flex-column gap-1">
					<Typography component="span">
						Краткое обозначение
					</Typography>
					<InputText
						type="text"
						value={editedMetric.label}
						onChange={(e) => {
							changeEditedMetric("label", e.currentTarget.value);
						}}
					/>
				</div>
				<div className="flex flex-column gap-1">
					<Typography component="span">Тип метрики</Typography>
					<Dropdown
						value={editedMetric.typeId}
						options={types}
						onChange={(e) => {
							changeEditedMetric("typeId", e.value);
						}}
						optionValue="id"
						optionLabel="name"
					/>
				</div>
				<div className="flex flex-column gap-1">
					<Typography component="span">Статус метрики</Typography>
					<Dropdown
						value={editedMetric.statusId}
						options={statuses}
						onChange={(e) => {
							changeEditedMetric("statusId", e.value);
						}}
						optionValue="id"
						optionLabel="name"
					/>
				</div>
			</ShortInfoWrapper>
		);
	}

	if (usedMetric)
		return (
			<ShortInfoWrapper>
				{usedMetric.label && (
					<TextTooltip tooltip="Краткое обозначение метрики">
						{usedMetric.label}
					</TextTooltip>
				)}
				<LargeBadge backgroundColor="#30C6B6">
					{usedMetric.type?.name}
				</LargeBadge>
				<LargeBadge backgroundColor="#4FE537">
					{usedMetric.status?.name}
				</LargeBadge>
			</ShortInfoWrapper>
		);

	return null;
};
