/* eslint-disable react/display-name */
import { Dropdown } from "primereact/dropdown";

import { Product } from "../../../hierarchy-metric-client";
import { SetState } from "../../../utils";

export const getMetricFilterProduct =
	(
		value: string,
		products: Product[] | undefined,
		setFilters: SetState<any>,
	) =>
	() => {
		return (
			<Dropdown
				value={value ? value : undefined}
				options={products ?? []}
				onChange={(e) =>
					setFilters((prev: any) => ({ ...prev, domain: e.value }))
				}
				placeholder="Выберите продукт"
				className="p-column-filter"
				showClear
				optionLabel="name"
				optionValue="id"
			/>
		);
	};
