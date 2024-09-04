/* eslint-disable react/display-name */
import { Dropdown } from "primereact/dropdown";

import { Level } from "../../../hierarchy-metric-client";
import { SetState } from "../../../utils";

export const getMetricFilterLevel =
	(value: string, levels: Level[] | undefined, setFilters: SetState<any>) =>
	() => {
		return (
			<Dropdown
				value={value ? value : undefined}
				options={levels ?? []}
				onChange={(e) =>
					setFilters((prev: any) => ({ ...prev, level: e.value }))
				}
				placeholder="Выберите уровень"
				className="p-column-filter"
				showClear
				optionLabel="name"
				optionValue="id"
			/>
		);
	};
