const DEFAULT_FONT_SIZE = 10;

const getContextFont = (fontSize: number) => `${fontSize}px sans-serif`;

/**
 * Measures text width on the canvas layer.
 * @param context - Context of your canvas layer.
 * @param text - Text you want to measure in this context.
 */
export const getTextWidth = (
  context: CanvasRenderingContext2D,
  text: string,
  fontSize: number
) => {
  context.font = getContextFont(fontSize);
  const textWidth = context.measureText(text).width;
  const resultWidth = Math.round(textWidth);
  context.font = getContextFont(DEFAULT_FONT_SIZE);
  return resultWidth;
};
