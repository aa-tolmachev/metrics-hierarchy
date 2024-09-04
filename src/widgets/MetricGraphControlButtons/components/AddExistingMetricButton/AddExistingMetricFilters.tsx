import { Dropdown } from "primereact/dropdown";
import { InputText } from "primereact/inputtext";
import { FC } from "react";

import { Typography } from "../../../../components/Typography/Typography";
import { useGetAttractionChannels } from "../../../../core/backend/hooks/metrics/dictionaries/useGetAttractionChannels";
import { useGetDomains } from "../../../../core/backend/hooks/metrics/dictionaries/useGetDomains";
import { useGetPlatforms } from "../../../../core/backend/hooks/metrics/dictionaries/useGetPlatforms";
import { useGetProducts } from "../../../../core/backend/hooks/metrics/dictionaries/useGetProducts";
import { MetricFilters } from "../../../../core/backend/hooks/metrics/types";
import { SetState } from "../../../../utils";

interface AddExistingMetricFiltersProps {
	filters: MetricFilters;

	setFilters: SetState<MetricFilters>;
}

export const AddExistingMetricsFilters: FC<AddExistingMetricFiltersProps> = ({
	filters,
	setFilters,
}) => {
	const { data: domains } = useGetDomains();
	const { data: products } = useGetProducts();
	const { data: platforms } = useGetPlatforms();
	const { data: attractionChannels } = useGetAttractionChannels();
	return (
		<div className="grid">
			<div className="col-12 flex flex-column gap-2">
				<Typography component="span">Название:</Typography>
				<InputText
					value={filters.name}
					onChange={(e) => {
						setFilters((prev) => ({
							...prev,
							name: e.target.value,
						}));
					}}
				/>
			</div>
			<div className="col-6 flex flex-column gap-2">
				<Typography component="span">Домен:</Typography>
				<Dropdown
					value={filters.domain ? filters.domain : undefined}
					options={domains ?? []}
					onChange={(e) =>
						setFilters((prev: any) => ({
							...prev,
							domain: e.value,
						}))
					}
					optionLabel="name"
					optionValue="id"
					showClear
				/>
			</div>
			<div className="col-6 flex flex-column gap-2">
				<Typography component="span">Вертикаль/Продукт:</Typography>
				<Dropdown
					value={filters.product ? filters.product : undefined}
					options={products ?? []}
					onChange={(e) =>
						setFilters((prev: any) => ({
							...prev,
							product: e.value,
						}))
					}
					optionLabel="name"
					optionValue="id"
					showClear
				/>
			</div>
			<div className="col-6 flex flex-column gap-2">
				<Typography component="span">Платформа:</Typography>
				<Dropdown
					value={filters.platform ? filters.platform : undefined}
					options={platforms ?? []}
					onChange={(e) =>
						setFilters((prev: any) => ({
							...prev,
							platform: e.value,
						}))
					}
					optionLabel="name"
					optionValue="id"
					showClear
				/>
			</div>
			<div className="col-6 flex flex-column gap-2">
				<Typography component="span">Канал привлечения:</Typography>
				<Dropdown
					value={
						filters.attractionChannel
							? filters.attractionChannel
							: undefined
					}
					options={attractionChannels ?? []}
					onChange={(e) =>
						setFilters((prev: any) => ({
							...prev,
							attractionChannel: e.value,
						}))
					}
					optionLabel="name"
					optionValue="id"
					showClear
				/>
			</div>
		</div>
	);
};
