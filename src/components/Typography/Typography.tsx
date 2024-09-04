import { FC, HTMLAttributes } from "react";

import { TypographyComponentType, TypographyVariant } from "./types";
import { getTypographyVariantClass } from "./utils/getTypographyVariantClass";

interface TypographyProps extends HTMLAttributes<HTMLElement> {
	component: TypographyComponentType;
	variant?: TypographyVariant;
}

export const Typography: FC<TypographyProps> = ({
	component,
	variant,
	children,
	...props
}) => {
	const TypographyComponent = component;
	const typographyClassName = getTypographyVariantClass(component, variant);
	return (
		<TypographyComponent className={typographyClassName} {...props}>
			{children}
		</TypographyComponent>
	);
};
