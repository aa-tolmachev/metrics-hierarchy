import { JSX } from "react";

export const TypographyComponentsArray = [
	"h1",
	"h2",
	"h3",
	//   'h4',
	//   'h5',
	//   'h6',
	"span",
	"p",
	"time",
	"figcaption",
	"b",
	"strong",
] as const;

export type TypographyComponentType =
	(typeof TypographyComponentsArray)[number];

export type TypographyComponent = keyof Pick<
	JSX.IntrinsicElements,
	TypographyComponentType
>;

export type TypographyVariant = TypographyComponent;

export type TypographyColorVariant =
	| "primary"
	| "secondary"
	| "accent"
	| "invert";

export type TypographyDecoration =
	| "noDecoration"
	| "italic"
	| "bold"
	| "linethrough"
	| "underline";
