import parse from "html-react-parser";

import { purifyHTML } from "./purifyHTML";

export const parseHTML = (rawHTML: string) => {
	const preparedHTML = purifyHTML(rawHTML);
	return parse(preparedHTML);
};
