/* eslint-disable react/display-name */
import { Dropdown } from "primereact/dropdown";

import { Domain } from "../../../hierarchy-metric-client";
import { SetState } from "../../../utils";

export const getMetricFilterDomain =
	(value: string, domains: Domain[] | undefined, setFilters: SetState<any>) =>
	() => {
		return (
			<Dropdown
				value={value ? value : undefined}
				options={domains ?? []}
				onChange={(e) =>
					setFilters((prev: any) => ({ ...prev, domain: e.value }))
				}
				placeholder="Выберите домен"
				className="p-column-filter"
				showClear
				optionLabel="name"
				optionValue="id"
			/>
		);
	};
