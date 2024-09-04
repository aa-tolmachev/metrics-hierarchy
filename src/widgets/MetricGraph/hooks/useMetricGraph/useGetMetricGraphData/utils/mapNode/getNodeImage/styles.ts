export const STYLES = `
	<style>
		.node-container {
			height: 200px;
			display: flex;
			flex-direction: column;
			justify-content: space-between;
			padding-left: 24px;
		}

		.node-heading {
			font-size: 24px;
			line-height: 0;
		}

		.node-values {
			font-size: 24px;
			margin-bottom: 56px;
		}

		.metric-percent-positive {
			color: #33A000;
		}

		.metric-percent-negative {
			color: red;
		}

		.metric-owner {
			font-size: 24px;
			fill: #ffffff;
		}

		.metric-status {
			font-size: 24px;
		}

		.expand-icon {
			transform: scale(1.8);
		}

		.trend-icon {
			transform: scale(2) translateY(-1px);
		}

		.upside-down {
			transform: scaleX(2) scaleY(-2) translateY(-11px);
		}

		.metric-dynamics {
			margin-left: 35px;
		}
	</style>
`;
