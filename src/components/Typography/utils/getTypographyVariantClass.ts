import { TypographyComponentType, TypographyVariant } from "../types";

const REGULAR_TEXT = "text-base font-normal";
const BOLD_TEXT = "text-base font-bold";

const TYPOGRAPHY_CLASSES = {
	h1: "text-3xl font-semibold",
	h2: "text-2xl font-semibold",
	h3: "text-xl font-semibold",
	p: REGULAR_TEXT,
	span: REGULAR_TEXT,
	time: REGULAR_TEXT,
	figcaption: REGULAR_TEXT,
	b: BOLD_TEXT,
	strong: BOLD_TEXT,
};

export const getTypographyVariantClass = (
	component: TypographyComponentType,
	variant?: TypographyVariant,
) => {
	return TYPOGRAPHY_CLASSES[variant ?? component];
};
