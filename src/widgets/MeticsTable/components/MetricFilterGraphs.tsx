/* eslint-disable react/display-name */
import { MultiSelect } from "primereact/multiselect";

import { GraphShort } from "../../../hierarchy-metric-client";
import { SetState } from "../../../utils";

export const getMetricFilterGraphs =
	(
		value: string,
		graphs: GraphShort[] | undefined,
		setFilters: SetState<any>,
	) =>
	() => {
		return (
			<MultiSelect
				value={value}
				options={graphs}
				onChange={(e) =>
					setFilters((prev: any) => ({ ...prev, graphs: e.value }))
				}
				placeholder="Выберите графы"
				className="p-column-filter"
				showClear
				optionLabel="name"
				optionValue="id"
			/>
		);
	};
