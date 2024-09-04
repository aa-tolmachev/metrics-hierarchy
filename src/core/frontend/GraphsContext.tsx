import { FC, ReactNode, createContext } from "react";

import { GraphsApi } from "../../hierarchy-metric-client";
import { configuration } from "./configuration";

const api = new GraphsApi(configuration);

export const GraphsContext = createContext<GraphsApi>(api);

interface ConfigurationProviderProps {
	children: ReactNode;
}

export const GraphsProvider: FC<ConfigurationProviderProps> = ({
	children,
}) => {
	return (
		<GraphsContext.Provider value={api}>{children}</GraphsContext.Provider>
	);
};
