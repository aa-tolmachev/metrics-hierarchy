import type { LayoutDirection } from "./graphLayout";

export interface NodePosition {
	x: number;
	y: number;
}

export type NodePositions = Record<string, NodePosition>;

const getKey = (graphId: string) =>
	`metrics-hierarchy:graph-positions:${graphId}`;

export const loadGraphPositions = (graphId: string): NodePositions => {
	if (typeof window === "undefined") return {};
	try {
		return JSON.parse(localStorage.getItem(getKey(graphId)) ?? "{}");
	} catch {
		return {};
	}
};

export const saveGraphPositions = (
	graphId: string,
	positions: NodePositions,
) => {
	if (typeof window === "undefined") return;
	try {
		localStorage.setItem(getKey(graphId), JSON.stringify(positions));
	} catch {
		// Переполнение или запрет хранилища не должны ломать работу с графом.
	}
};

export const clearGraphPositions = (graphId: string) => {
	if (typeof window === "undefined") return;
	localStorage.removeItem(getKey(graphId));
	localStorage.removeItem(getDirectionKey(graphId));
};

const getDirectionKey = (graphId: string) =>
	`metrics-hierarchy:graph-direction:${graphId}`;

export const loadLayoutDirection = (graphId: string): LayoutDirection => {
	if (typeof window === "undefined") return "TB";
	return localStorage.getItem(getDirectionKey(graphId)) === "LR"
		? "LR"
		: "TB";
};

export const saveLayoutDirection = (
	graphId: string,
	direction: LayoutDirection,
) => {
	if (typeof window === "undefined") return;
	localStorage.setItem(getDirectionKey(graphId), direction);
};

export const getEdgeSmoothDirection = (direction: LayoutDirection) =>
	direction === "LR" ? "horizontal" : "vertical";

export const saveNetworkPositions = (graphId: string, network: any) => {
	const positions: NodePositions = network.getPositions();
	const rounded = Object.fromEntries(
		Object.entries(positions).map(([id, { x, y }]) => [
			id,
			{ x: Math.round(x), y: Math.round(y) },
		]),
	);
	saveGraphPositions(graphId, rounded);
};
