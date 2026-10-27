import cx from "classnames";
import { Button } from "primereact/button";
import { Menu } from "primereact/menu";
import { FC, useCallback, useEffect, useState } from "react";

import { useAppDispatch } from "../../store/hooks/useAppDispatch";
import { useAppSelector } from "../../store/hooks/useAppSelector";
import {
	closeGlobalMenu,
	openGlobalMenu,
} from "../../store/reducer/globalMenuReducer";
import { setSettings } from "../../store/reducer/settingsReducer";
import { loadSettings } from "../../utils/settingsStorage";
import { SettingsDialog } from "../../widgets/SettingsDialog/SettingsDialog";
import { LayoutProps } from "../types";
import { useGetMenuItems } from "./hooks/useGetMenuItems";

interface MenuLayoutProps extends LayoutProps {}

export const MenuLayout: FC<MenuLayoutProps> = ({ children }) => {
	const dispatch = useAppDispatch();
	const { isOpen } = useAppSelector((state) => state.globalMenu);

	const onClose = useCallback(() => {
		dispatch(closeGlobalMenu());
	}, [dispatch]);

	const [isSettingsOpen, setIsSettingsOpen] = useState(false);
	const onOpenSettings = useCallback(() => setIsSettingsOpen(true), []);

	useEffect(() => {
		dispatch(setSettings(loadSettings()));
	}, [dispatch]);

	const menuItems = useGetMenuItems(onClose, onOpenSettings);

	return (
		<>
			<aside
				className={cx(
					"fixed top-0 left-0 h-full z-3",
					{ ["w-15rem bg-white"]: isOpen },
					{ ["w-6rem px-4 py-3"]: !isOpen },
				)}
			>
				{!isOpen && (
					<Button
						className="w-4rem h-4rem"
						severity="secondary"
						icon="pi pi-bars text-3xl"
						rounded
						text
						onClick={() => dispatch(openGlobalMenu())}
					/>
				)}
				{isOpen && (
					<Menu className="w-full border-none" model={menuItems} />
				)}
			</aside>
			<main>{children}</main>
			<SettingsDialog
				visible={isSettingsOpen}
				onHide={() => setIsSettingsOpen(false)}
			/>
		</>
	);
};
