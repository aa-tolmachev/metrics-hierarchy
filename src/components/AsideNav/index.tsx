import { useRouter } from "next/router";
import { Menu } from "primereact/menu";
import { MenuItem } from "primereact/menuitem";
import { FunctionComponent } from "react";

interface IAsideNavProps {}
export const AsideNav: FunctionComponent<IAsideNavProps> = () => {
	const router = useRouter();
	const items: MenuItem[] = [
		{
			label: "Demo",
			expanded: true,
			items: [
				{
					label: "Transaction Message",
					icon: "pi pi-fw pi-code",
					command: () => router.push("/demo/transaction-message"),
				},
				{
					label: "Shared Static",
					icon: "pi pi-fw pi-code",
					command: () => router.push("/demo/shared-static"),
				},
				{
					label: "Auth with Redirect",
					icon: "pi pi-fw pi-lock",
					command: () => router.push("/demo/auth-with-redirect"),
				},
			],
		},
	];

	return (
		<nav className="w-16rem">
			<Menu model={items} className="w-full" />
		</nav>
	);
};
