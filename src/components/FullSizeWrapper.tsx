import { FC, ReactNode } from "react";

interface FullSizeWrapperProps {
	children: ReactNode;
}

export const FullSizeWrapper: FC<FullSizeWrapperProps> = ({ children }) => {
	return <div className="w-full h-full">{children}</div>;
};
