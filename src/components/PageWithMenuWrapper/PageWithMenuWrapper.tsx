import cx from "classnames";
import { FC, ReactNode } from "react";

import { useAppSelector } from "../../store/hooks/useAppSelector";
import styles from "./PageWithMenuWrapper.module.scss";

interface PageWithMenuWrapperProps {
	children: ReactNode;
}

export const PageWithMenuWrapper: FC<PageWithMenuWrapperProps> = ({
	children,
}) => {
	const { isOpen } = useAppSelector((state) => state.globalMenu);
	return (
		<div
			className={cx({
				[styles.pageWithMenu]: isOpen,
				[styles.page]: !isOpen,
			})}
		>
			{children}
		</div>
	);
};
