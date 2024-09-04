/* eslint-disable @typescript-eslint/no-var-requires */
import { CaptureConsole } from "@sentry/integrations";
import env from "env-var";

type SentryReact = typeof import("@sentry/react");
type SentryNode = typeof import("@sentry/node");

let Sentry: SentryNode | SentryReact;
if (typeof window !== "undefined") {
	Sentry = require("@sentry/react") as SentryReact;
} else {
	Sentry = require("@sentry/node") as SentryNode;
}

export const { captureException, setTag } = Sentry;

export function init() {
	const SENTRY_DSN = env
		.from(process.env)
		.get("NEXT_PUBLIC_SENTRY_DSN")
		.asUrlString();

	// What is the point of requiring @sentry/node if we only initialize browser version
	if (typeof window !== "undefined" && SENTRY_DSN) {
		Sentry.init({
			dsn: SENTRY_DSN,
			debug: false,
			integrations:
				process.env.NODE_ENV === "production"
					? [new CaptureConsole({ levels: ["error"] })]
					: [
							// no CaptureConsole in development
						],
		});
	}
}
