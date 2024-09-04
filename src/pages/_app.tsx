import { SessionProvider } from "next-auth/react";
import type { AppLayoutProps } from "next/app";
import Head from "next/head";
import { useRouter } from "next/router";
import nProgress from "nprogress";
import "nprogress/nprogress.css";

/* Primereact styles */

/*
 * Base primereact theme
 * @see https://primereact.org/theming/
 * */
import "primeflex/primeflex.css";
import "primeicons/primeicons.css";
import { ConfirmDialog } from "primereact/confirmdialog";
import "primereact/resources/primereact.css";
import "primereact/resources/themes/saga-blue/theme.css";
import React, { ReactNode, useEffect } from "react";
import { Provider as ReduxProvider } from "react-redux";
import "styles/global.scss";
import { Sentry } from "utils";

import { GraphsProvider } from "../core/frontend/GraphsContext";
import { MetricsProvider } from "../core/frontend/MetricsContext";
import { MenuLayout } from "../layouts/MenuLayout/MenuLayout";
import { store } from "../store";

Sentry.init();

export default function App({ Component, pageProps }: AppLayoutProps) {
	const router = useRouter();

	useEffect(() => {
		const handleStart = () => {
			nProgress.start();
		};
		const handleStop = () => {
			nProgress.done();
		};

		router.events.on("routeChangeStart", handleStart);
		router.events.on("routeChangeComplete", handleStop);
		router.events.on("routeChangeError", handleStop);

		return () => {
			router.events.off("routeChangeStart", handleStart);
			router.events.off("routeChangeComplete", handleStop);
			router.events.off("routeChangeError", handleStop);
		};
	}, [router]);

	const getLayout = Component.getLayout ?? ((page: ReactNode) => page);

	return getLayout(
		<>
			<Head>
				<title>Metrics Hierarchy</title>
				<meta name="description" content="Metrics Hierarchy" />
				<script src="/env.js" />
			</Head>
			<SessionProvider>
				<GraphsProvider>
					<MetricsProvider>
						<ReduxProvider store={store}>
							<MenuLayout>
								<Component {...pageProps} />
								<ConfirmDialog />
							</MenuLayout>
						</ReduxProvider>
					</MetricsProvider>
				</GraphsProvider>
			</SessionProvider>
		</>,
	);
}
