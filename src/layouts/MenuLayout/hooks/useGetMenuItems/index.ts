import { useRouter } from "next/router";
import { MenuItem } from "primereact/menuitem";
import { useEffect } from "react";

import { isDemo } from "../../../../core/frontend/configuration";
import { resetDemoData } from "../../../../core/frontend/demoBackend";
import { getCloseItemRenderer } from "./closeItemRenderer";
import { fullItemRenderer } from "./fullItemRenderer";

export const useGetMenuItems = (
	onClose: VoidFunction,
	onOpenSettings: VoidFunction,
) => {
	const { push, prefetch } = useRouter();

	useEffect(() => {
		prefetch("/metrics");
		prefetch("/graphs");
	}, [prefetch]);

	const closeItemRenderer = getCloseItemRenderer(onClose);

	const menuItems: MenuItem[] = [
		{
			template: closeItemRenderer,
		},
		{
			label: "Список метрик",
			icon: "pi pi-table",
			command: () => push("/metrics"),
		},
		{
			label: "Список графов",
			icon: "pi pi-list",
			command: () => push("/graphs"),
		},
		{
			label: "Настройки",
			icon: "pi pi-cog",
			command: onOpenSettings,
		},
		...(isDemo
			? [
					{
						label: "Сбросить демо-данные",
						icon: "pi pi-refresh",
						command: resetDemoData,
					},
				]
			: []),
		{
			template: fullItemRenderer,
		},
	];

	return menuItems;
};
