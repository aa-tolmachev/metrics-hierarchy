import { FilterMatchMode } from "primereact/api";
import { Column } from "primereact/column";
import { DataTable } from "primereact/datatable";
import { FC, useCallback, useState } from "react";

import { Graph, GraphShort } from "../../hierarchy-metric-client";
import styles from "./GraphsTable.module.scss";
import { GraphClickTemplate } from "./components/GraphClickTemplate";
import { GraphEditDialog } from "./components/GraphEditDialog";
import { GraphEditTemplate } from "./components/GraphEditTemplate";
import { useGraphTable } from "./hooks/useGraphTable";

interface GraphsTableProps {
	graphs: GraphShort[];

	onEditGraph: VoidFunction;
}

export const GraphsTable: FC<GraphsTableProps> = ({ graphs, onEditGraph }) => {
	const [editGraph, setEditGraph] = useState<Graph>();

	const onGraphEdit = useCallback((graph: Graph) => {
		setEditGraph(graph);
	}, []);

	const graphData = useGraphTable(graphs, onGraphEdit);

	return (
		<>
			<DataTable value={graphData} filterDisplay="row">
				<Column
					field="name"
					filter
					filterPlaceholder="Search by name"
					filterMatchMode={FilterMatchMode.CONTAINS}
					filterHeaderClassName={styles.filterHeader}
					header="Название"
				/>
				<Column
					field="author"
					filter
					filterPlaceholder="Search by author"
					filterField="author"
					filterMatchMode={FilterMatchMode.CONTAINS}
					filterHeaderClassName={styles.filterHeader}
					header="Автор"
				/>
				<Column
					field="onGraphClick"
					header=""
					body={GraphClickTemplate}
				/>
				<Column
					field="onGraphEdit"
					header=""
					body={GraphEditTemplate}
				/>
			</DataTable>
			{editGraph && (
				<GraphEditDialog
					graphShort={editGraph}
					onHide={() => {
						setEditGraph(undefined);
					}}
					onEdit={() => {
						setEditGraph(undefined);
						onEditGraph();
					}}
				/>
			)}
		</>
	);
};
