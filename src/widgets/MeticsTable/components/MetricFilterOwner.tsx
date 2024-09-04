/* eslint-disable react/display-name */
import { Dropdown } from "primereact/dropdown";

import { User } from "../../../hierarchy-metric-client";
import { SetState } from "../../../utils";

export const getMetricFilterOwner =
	(value: string, owners: User[] | undefined, setFilters: SetState<any>) =>
	() => {
		return (
			<Dropdown
				value={value ? value : undefined}
				options={owners ?? []}
				onChange={(e) =>
					setFilters((prev: any) => ({ ...prev, owner: e.value }))
				}
				placeholder="Выберите владельца"
				className="p-column-filter"
				showClear
				optionLabel="name"
				optionValue="id"
			/>
		);
	};
