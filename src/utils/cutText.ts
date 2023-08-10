/**
 * Cuts the text and adds '...' at the end of it if the text is too long.
 * @param text - The text that is cut if it's too long.
 * @param maxLength - The maximum length of the text. If the text is longer than maxLength, it will be cut and the chars from (maxLength - 3) will be '...'
 */

export const cutText = (text: string, maxLength: number) => {
  if (text.length <= maxLength) return text;
  return `${text.slice(0, maxLength - 3)}...`;
};
