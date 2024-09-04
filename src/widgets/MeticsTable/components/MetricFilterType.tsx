/* eslint-disable react/display-name */
import { Dropdown } from "primereact/dropdown";

import { Type } from "../../../hierarchy-metric-client";
import { SetState } from "../../../utils";

export const getMetricFilterType =
	(value: string, types: Type[] | undefined, setFilters: SetState<any>) =>
	() => {
		return (
			<Dropdown
				value={value ? value : undefined}
				options={types ?? []}
				onChange={(e) =>
					setFilters((prev: any) => ({ ...prev, type: e.value }))
				}
				placeholder="Выберите тип метрики"
				className="p-column-filter"
				showClear
				optionLabel="name"
				optionValue="id"
			/>
		);
	};
