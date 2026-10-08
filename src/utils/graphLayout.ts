import { NodePositions } from "./graphPositionsStorage";

export type LayoutDirection = "TB" | "LR";

interface LayoutEdge {
	from: string;
	to: string;
}

// Узел vis рисуется картинкой 100×50 единиц графа.
const SPACING: Record<LayoutDirection, { along: number; across: number }> = {
	TB: { along: 100, across: 130 },
	LR: { along: 170, across: 70 },
};

/**
 * Связь идёт от метрики-фактора к метрике, на которую она влияет,
 * поэтому верхний уровень — метрики без исходящих связей.
 */
const getLevels = (nodeIds: string[], edges: LayoutEdge[]) => {
	const targets = new Map<string, string[]>();
	edges.forEach(({ from, to }) => {
		targets.set(from, [...(targets.get(from) ?? []), to]);
	});

	const levels = new Map<string, number>();
	const visiting = new Set<string>();
	const getLevel = (id: string): number => {
		const known = levels.get(id);
		if (known !== undefined) return known;
		if (visiting.has(id)) return 0;
		visiting.add(id);
		const nodeTargets = targets.get(id) ?? [];
		const level =
			nodeTargets.length === 0
				? 0
				: Math.max(...nodeTargets.map(getLevel)) + 1;
		visiting.delete(id);
		levels.set(id, level);
		return level;
	};
	nodeIds.forEach(getLevel);

	return { levels, targets };
};

export const computeHierarchyLayout = (
	nodeIds: string[],
	edges: LayoutEdge[],
	currentPositions: NodePositions,
	direction: LayoutDirection,
): NodePositions => {
	const ids = new Set(nodeIds);
	const validEdges = edges.filter(
		({ from, to }) => ids.has(from) && ids.has(to) && from !== to,
	);
	const { levels, targets } = getLevels(nodeIds, validEdges);

	const byLevel: string[][] = [];
	nodeIds.forEach((id) => {
		const level = levels.get(id) ?? 0;
		byLevel[level] = [...(byLevel[level] ?? []), id];
	});

	const { along, across } = SPACING[direction];
	const acrossAxis = direction === "TB" ? "x" : "y";
	const order = new Map<string, number>();
	const positions: NodePositions = {};

	byLevel.forEach((levelIds, level) => {
		const getBarycenter = (id: string) => {
			const placed = (targets.get(id) ?? [])
				.map((target) => order.get(target))
				.filter((value): value is number => value !== undefined);
			if (placed.length === 0)
				return currentPositions[id]?.[acrossAxis] ?? 0;
			return (
				placed.reduce((sum, value) => sum + value, 0) / placed.length
			);
		};

		const sorted = [...levelIds].sort(
			(a, b) => getBarycenter(a) - getBarycenter(b),
		);
		const offset = ((sorted.length - 1) * across) / 2;
		sorted.forEach((id, index) => {
			const acrossValue = index * across - offset;
			order.set(id, acrossValue);
			const alongValue = level * along;
			positions[id] =
				direction === "TB"
					? { x: acrossValue, y: alongValue }
					: { x: alongValue, y: acrossValue };
		});
	});

	return positions;
};
