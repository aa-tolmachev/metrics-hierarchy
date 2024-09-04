/* eslint-disable react/display-name */
import { Dropdown } from "primereact/dropdown";

import { Platform } from "../../../hierarchy-metric-client";
import { SetState } from "../../../utils";

export const getMetricFilterPlatform =
	(
		value: string,
		platforms: Platform[] | undefined,
		setFilters: SetState<any>,
	) =>
	() => {
		return (
			<Dropdown
				value={value ? value : undefined}
				options={platforms ?? []}
				onChange={(e) =>
					setFilters((prev: any) => ({ ...prev, platform: e.value }))
				}
				placeholder="Выберите платформу"
				className="p-column-filter"
				showClear
				optionLabel="name"
				optionValue="id"
			/>
		);
	};
