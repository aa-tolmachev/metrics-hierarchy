import cx from "classnames";
import { useRouter } from "next/router";
import { Button } from "primereact/button";
import { useContext, useEffect, useState } from "react";

import { GraphsContext } from "../../core/frontend/GraphsContext";
import { useAppSelector } from "../../store/hooks/useAppSelector";
import { animateNodePositions } from "../../utils/animateNodePositions";
import {
	LayoutDirection,
	computeHierarchyLayout,
} from "../../utils/graphLayout";
import {
	clearGraphPositions,
	getEdgeSmoothDirection,
	loadLayoutDirection,
	saveLayoutDirection,
	saveNetworkPositions,
} from "../../utils/graphPositionsStorage";
import styles from "./MetricGraphLayoutControls.module.scss";

const DIRECTIONS: { value: LayoutDirection; icon: string; title: string }[] = [
	{ value: "TB", icon: "pi pi-arrow-down", title: "Сверху вниз" },
	{ value: "LR", icon: "pi pi-arrow-right", title: "Слева направо" },
];

export const MetricGraphLayoutControls = () => {
	const router = useRouter();
	const graphId = router.query.graph?.toString();
	const graph = useAppSelector((state) => state.metricGraph.data);
	const api = useContext(GraphsContext);

	const [direction, setDirection] = useState<LayoutDirection | undefined>();

	useEffect(() => {
		setDirection(graphId ? loadLayoutDirection(graphId) : undefined);
	}, [graphId]);

	const setEdgeDirection = (value: LayoutDirection) => {
		graph.setOptions({
			edges: {
				smooth: { forceDirection: getEdgeSmoothDirection(value) },
			},
		});
	};

	const arrange = (value: LayoutDirection) => {
		if (!graph || !graphId) return;
		const nodeIds: string[] = graph.body.data.nodes.getIds();
		const edges = graph.body.data.edges.get();
		const positions = computeHierarchyLayout(
			nodeIds,
			edges,
			graph.getPositions(),
			value,
		);
		setEdgeDirection(value);
		saveLayoutDirection(graphId, value);
		setDirection(value);
		animateNodePositions(graph, positions, {
			onComplete: () => saveNetworkPositions(graphId, graph),
		});
	};

	const reset = async () => {
		if (!graph || !graphId) return;
		const original = await api.graphGet(graphId);
		const positions: Record<string, { x: number; y: number }> = {};
		original.nodes?.forEach(({ id, coordinates }) => {
			if (
				id &&
				coordinates?.x !== null &&
				coordinates?.x !== undefined &&
				coordinates?.y !== null &&
				coordinates?.y !== undefined
			)
				positions[id] = { x: coordinates.x, y: coordinates.y };
		});
		clearGraphPositions(graphId);
		setEdgeDirection("TB");
		setDirection("TB");
		animateNodePositions(graph, positions, {
			onComplete: () => clearGraphPositions(graphId),
		});
	};

	return (
		<div className={styles.panel}>
			<span className={styles.label}>Расположение</span>
			{DIRECTIONS.map(({ value, icon, title }) => (
				<Button
					key={value}
					className={cx({ [styles.active]: direction === value })}
					icon={icon}
					text
					tooltip={title}
					tooltipOptions={{ position: "bottom" }}
					aria-label={title}
					disabled={!graph}
					onClick={() => arrange(value)}
				/>
			))}
			<span className={styles.divider} />
			<Button
				icon="pi pi-refresh"
				label="Сбросить"
				text
				tooltip="Вернуть исходное расположение"
				tooltipOptions={{ position: "bottom" }}
				disabled={!graph}
				onClick={reset}
			/>
		</div>
	);
};
