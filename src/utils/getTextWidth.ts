export const getTextWidth = (text: string, font?: string) => {
	const canvas = document.createElement("canvas");
	const context = canvas.getContext("2d");
	if (!context) throw new Error("no canvas 2d context");
	if (font) context.font = font;
	return context.measureText(text).width;
};
