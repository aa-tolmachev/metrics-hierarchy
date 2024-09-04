/* eslint-disable react/display-name */
import { ColumnFilterElementTemplateOptions } from "primereact/column";
import { InputText } from "primereact/inputtext";

export const getMetricFilterInput =
	(onInput: (value: string) => void) =>
	(options: ColumnFilterElementTemplateOptions) => {
		return (
			<InputText
				value={options.value}
				onChange={(e) => onInput(e.target.value)}
			/>
		);
	};
