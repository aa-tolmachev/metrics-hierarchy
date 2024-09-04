import {
	ServerConfiguration,
	createConfiguration,
} from "../../hierarchy-metric-client";

const backendApi = process.env.NEXT_PUBLIC_BACKEND ?? "http://localhost:3008";

export const configuration = createConfiguration({
	baseServer: new ServerConfiguration(backendApi.toString(), {}),
});
