/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unsafe-return */

export const getTextWidth = (context: any, text: string) => {
  const textWidth = context.measureText(text).width as number;
  const resultWidth = Math.round(textWidth);
  return resultWidth;
};
