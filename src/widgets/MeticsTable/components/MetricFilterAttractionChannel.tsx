/* eslint-disable react/display-name */
import { Dropdown } from "primereact/dropdown";

import { AttractionChannel } from "../../../hierarchy-metric-client";
import { SetState } from "../../../utils";

export const getMetricFilterAttractionChannel =
	(
		value: string,
		attractionChannels: AttractionChannel[] | undefined,
		setFilters: SetState<any>,
	) =>
	() => {
		return (
			<Dropdown
				value={value ? value : undefined}
				options={attractionChannels ?? []}
				onChange={(e) =>
					setFilters((prev: any) => ({
						...prev,
						attractionChannel: e.value,
					}))
				}
				placeholder="Выберите канал"
				className="p-column-filter"
				showClear
				optionLabel="name"
				optionValue="id"
			/>
		);
	};
