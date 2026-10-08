// SVG рендерится как картинка, поэтому веб-шрифты страницы ему недоступны —
// используем системный стек.
const FONT_STACK =
	'-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif';

export const STYLES = `
	<style>
		.card {
			box-sizing: border-box;
			height: 200px;
			padding: 18px 24px 18px 22px;
			display: flex;
			flex-direction: column;
			font-family: ${FONT_STACK};
			color: #1f2937;
		}

		.meta {
			display: flex;
			align-items: center;
			gap: 10px;
			padding-right: 32px;
			font-size: 16px;
			color: #6b7280;
			white-space: nowrap;
			overflow: hidden;
		}

		.status {
			flex-shrink: 0;
			padding: 3px 10px;
			border-radius: 999px;
			font-size: 15px;
			font-weight: 600;
		}

		.owner {
			overflow: hidden;
			text-overflow: ellipsis;
		}

		.name {
			margin-top: 10px;
			font-size: 21px;
			line-height: 26px;
			font-weight: 600;
			letter-spacing: -0.2px;
			display: -webkit-box;
			-webkit-line-clamp: 2;
			-webkit-box-orient: vertical;
			overflow: hidden;
		}

		.values {
			margin-top: auto;
			display: flex;
			align-items: baseline;
			gap: 12px;
			white-space: nowrap;
		}

		.value {
			font-size: 50px;
			line-height: 1;
			font-weight: 700;
			letter-spacing: -1px;
		}

		.value-empty {
			color: #9ca3af;
		}

		.postfix {
			margin-left: 6px;
			font-size: 26px;
			font-weight: 600;
			color: #6b7280;
		}

		.dynamics {
			padding: 4px 12px;
			border-radius: 999px;
			font-size: 18px;
			font-weight: 600;
		}

		.dynamics-positive {
			color: #15803d;
			background: #dcfce7;
		}

		.dynamics-negative {
			color: #b91c1c;
			background: #fee2e2;
		}
	</style>
`;
