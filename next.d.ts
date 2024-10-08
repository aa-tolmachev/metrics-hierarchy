import type {
	NextComponentType,
	NextLayoutComponentType,
	NextPageContext,
} from "next";
import type { AppProps } from "next/app";

declare module "next" {
	type NextLayoutComponentType<P = object> = NextComponentType<
		NextPageContext,
		any,
		P
	> & {
		getLayout?: (page: ReactNode) => ReactNode;
	};
}

declare module "next/app" {
	type AppLayoutProps = AppProps & {
		Component: NextLayoutComponentType;
	};
}
