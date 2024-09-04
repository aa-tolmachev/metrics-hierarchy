import NextAuth, { AuthOptions } from "next-auth";
import KeycloakProvider from "next-auth/providers/keycloak";

import { env } from "../../../../utils";

const clientId = env().get("NEXT_KEYCLOAK_CLIENT_ID").required().asString();
const clientSecret = env()
	.get("NEXT_KEYCLOAK_CLIENT_SECRET")
	.required()
	.asString();
const issuer = env().get("NEXT_KEYCLOAK_ISSUER").required().asUrlString();

export const authOptions: AuthOptions = {
	callbacks: {
		async jwt(options) {
			if (options.account) {
				options.token.accessToken = options.account.access_token;
			}
			return options.token;
		},
		async session(options) {
			if (options.token) {
				options.session.accessToken = options.token.accessToken;
			}
			return options.session;
		},
	},
	providers: [
		KeycloakProvider({
			clientId,
			clientSecret,
			issuer,
		}),
	],
};

export default NextAuth(authOptions);
