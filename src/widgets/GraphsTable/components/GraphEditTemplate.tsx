import { GraphTableData } from "../types";

export const GraphEditTemplate = (data: GraphTableData) => {
	return (
		<i
			className="pi pi-pencil cursor-pointer text-primary"
			onClick={data.onGraphEdit}
		/>
	);
};
