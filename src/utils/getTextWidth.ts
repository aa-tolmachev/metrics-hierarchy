export const getTextWidth = (
  context: CanvasRenderingContext2D,
  text: string
) => {
  const textWidth = context.measureText(text).width;
  const resultWidth = Math.round(textWidth);
  return resultWidth;
};
