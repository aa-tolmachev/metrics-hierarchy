export interface StatusTone {
	color: string;
	background: string;
}

const TONES: { pattern: RegExp; tone: StatusTone }[] = [
	{
		pattern: /не\s*актив|неактив/i,
		tone: { color: "#6b7280", background: "#f3f4f6" },
	},
	{
		pattern: /актив|действ|утвержд/i,
		tone: { color: "#15803d", background: "#dcfce7" },
	},
	{
		pattern: /разраб|черновик|соглас/i,
		tone: { color: "#b45309", background: "#fef3c7" },
	},
	{
		pattern: /устар|архив|отключ|удал/i,
		tone: { color: "#6b7280", background: "#f3f4f6" },
	},
];

const DEFAULT_TONE: StatusTone = { color: "#1d4ed8", background: "#dbeafe" };

export const getStatusTone = (statusName: string | undefined): StatusTone =>
	TONES.find(({ pattern }) => statusName && pattern.test(statusName))?.tone ??
	DEFAULT_TONE;
