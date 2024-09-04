import { sanitize } from "dompurify";

export const purifyHTML = (rawHTML: string) => {
	return sanitize(rawHTML);
};
