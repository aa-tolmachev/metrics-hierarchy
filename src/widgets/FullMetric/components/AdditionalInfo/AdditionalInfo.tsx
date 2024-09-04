import { Dropdown } from "primereact/dropdown";
import { MultiSelect } from "primereact/multiselect";
import { FC } from "react";

import { Descriptions } from "../../../../components/Descriptions/Descriptions";
import { useGetDimensions } from "../../../../core/backend/hooks/metrics/dictionaries/useGetDimensions";
import { useGetDomains } from "../../../../core/backend/hooks/metrics/dictionaries/useGetDomains";
import { useGetGranularities } from "../../../../core/backend/hooks/metrics/dictionaries/useGetGranularities";
import { useAppSelector } from "../../../../store/hooks/useAppSelector";
import { MetricSectionEditableProps } from "../../types";
import { getAdditionalInfoTextFromNames } from "./utils/getAdditionalInfoTextFromNames";
import { mapDimension } from "./utils/mapDimension";
import { mapGranularity } from "./utils/mapGranularity";

export const AdditionalInfo: FC<MetricSectionEditableProps> = ({
	editedMetric,
	changeEditedMetric,
}) => {
	const { data: domains } = useGetDomains();
	const { data: dimensions } = useGetDimensions();
	const { data: granularities } = useGetGranularities();
	const { usedMetric } = useAppSelector((state) => state.fullMetric);
	return (
		<Descriptions
			title="Дополнительная информация"
			value={[
				{
					label: "Домен метрики",
					value:
						editedMetric && domains ? (
							<Dropdown
								value={editedMetric.domainId}
								options={domains}
								optionLabel="name"
								optionValue="id"
								onChange={(e) => {
									changeEditedMetric("domainId", e.value);
								}}
							/>
						) : usedMetric ? (
							usedMetric.domain?.name ?? "—"
						) : null,
				},
				{
					label: "Измерения для метрики",
					value: editedMetric ? (
						<MultiSelect
							className="max-w-15rem"
							value={editedMetric.dimensionsIds}
							onChange={(e) => {
								changeEditedMetric("dimensionsIds", e.value);
							}}
							options={dimensions}
							optionLabel="name"
							optionValue="id"
						/>
					) : usedMetric ? (
						getAdditionalInfoTextFromNames(
							usedMetric.dimensions
								? (usedMetric.dimensions.map(
										mapDimension,
									) as string[])
								: [],
						)
					) : null,
				},
				{
					label: "Гранулярность",
					value: editedMetric ? (
						<MultiSelect
							className="max-w-15rem"
							value={editedMetric.granularitiesIds}
							onChange={(e) => {
								changeEditedMetric("granularitiesIds", e.value);
							}}
							options={granularities}
							optionLabel="name"
							optionValue="id"
						/>
					) : usedMetric ? (
						getAdditionalInfoTextFromNames(
							usedMetric.granularities
								? (usedMetric.granularities.map(
										mapGranularity,
									) as string[])
								: [],
						)
					) : null,
				},
			]}
		/>
	);
};
