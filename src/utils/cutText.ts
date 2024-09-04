export const cutText = (text: string, cutLength: number) => {
	if (typeof text !== "string") throw new Error("Text is not string");
	if (text.length <= cutLength) return text;
	return `${text.slice(0, cutLength)}...`;
};
