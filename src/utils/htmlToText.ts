export const isHTML = (text: string) => /<\/?[a-z][^>]*>/i.test(text);

/** Старые примеры запросов сохранялись rich-text редактором в виде HTML. */
export const htmlToText = (text: string) => {
	if (!isHTML(text) || typeof window === "undefined") return text;
	const withLineBreaks = text
		.replace(/<br\s*\/?>/gi, "\n")
		.replace(/<\/(p|div|li|pre|h[1-6])>/gi, "\n");
	const doc = new DOMParser().parseFromString(withLineBreaks, "text/html");
	return (doc.body.textContent ?? "").replace(/\n+$/, "");
};
