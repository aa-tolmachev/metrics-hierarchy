/**
 * Measures text width on the canvas layer.
 * @param context - Context of your canvas layer.
 * @param text - Text you want to measure in this context.
 */

export const getTextWidth = (
  context: CanvasRenderingContext2D,
  text: string
) => {
  const textWidth = context.measureText(text).width;
  const resultWidth = Math.round(textWidth);
  return resultWidth;
};
