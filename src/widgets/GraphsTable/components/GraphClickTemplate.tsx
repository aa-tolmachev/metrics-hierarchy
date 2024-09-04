import { GraphTableData } from "../types";

export const GraphClickTemplate = (data: GraphTableData) => {
	return (
		<i
			className="pi pi-external-link cursor-pointer text-primary"
			onClick={data.onGraphClick}
		/>
	);
};
