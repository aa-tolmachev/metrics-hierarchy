import { FC, ReactNode, createContext } from "react";

import { MetricsApi } from "../../hierarchy-metric-client";
import { configuration } from "./configuration";

const api = new MetricsApi(configuration);

export const MetricsContext = createContext<MetricsApi>(api);

interface ConfigurationProviderProps {
	children: ReactNode;
}

export const MetricsProvider: FC<ConfigurationProviderProps> = ({
	children,
}) => {
	return (
		<MetricsContext.Provider value={api}>
			{children}
		</MetricsContext.Provider>
	);
};
