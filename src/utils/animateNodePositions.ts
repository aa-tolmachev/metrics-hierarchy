type Positions = Record<string, { x: number; y: number }>;

const easeInOutCubic = (t: number) =>
	t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;

let currentFrame: number | undefined;

export const animateNodePositions = (
	network: any,
	target: Positions,
	{
		duration = 600,
		onComplete,
	}: { duration?: number; onComplete?: () => void } = {},
) => {
	if (currentFrame !== undefined) cancelAnimationFrame(currentFrame);

	const bodyNodes: Record<string, { x: number; y: number }> =
		network.body.nodes;
	const ids = Object.keys(target).filter((id) => bodyNodes[id]);
	const start: Positions = network.getPositions(ids);

	const setPositions = (progress: number) => {
		ids.forEach((id) => {
			const from = start[id];
			const to = target[id];
			bodyNodes[id].x = from.x + (to.x - from.x) * progress;
			bodyNodes[id].y = from.y + (to.y - from.y) * progress;
		});
	};

	const startTime = performance.now();
	const step = (now: number) => {
		const t = Math.min((now - startTime) / duration, 1);
		setPositions(easeInOutCubic(t));
		network.redraw();
		if (t < 1) {
			currentFrame = requestAnimationFrame(step);
		} else {
			currentFrame = undefined;
			onComplete?.();
		}
	};

	// fit() computes its target view from current positions, so place nodes at
	// their final positions while it starts, then rewind to animate from start.
	setPositions(1);
	network.fit({ animation: { duration, easingFunction: "easeInOutCubic" } });
	setPositions(0);

	currentFrame = requestAnimationFrame(step);
};
