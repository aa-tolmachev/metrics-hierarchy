import {
	ServerConfiguration,
	createConfiguration,
} from "../../hierarchy-metric-client";
import { DEMO_BACKEND_ORIGIN, installDemoBackend } from "./demoBackend";

export const isDemo = process.env.NEXT_PUBLIC_DEMO === "true";

if (isDemo) installDemoBackend();

export const backendApi = isDemo
	? DEMO_BACKEND_ORIGIN
	: (process.env.NEXT_PUBLIC_BACKEND ?? "http://localhost:3008");

export const configuration = createConfiguration({
	baseServer: new ServerConfiguration(backendApi.toString(), {}),
});
