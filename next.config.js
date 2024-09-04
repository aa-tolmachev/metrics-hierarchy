const nextConfig = {
	reactStrictMode: false,
	env: {
		NEXT_PUBLIC_BACKEND: process.env.NEXT_PUBLIC_BACKEND,
	},
	transpilePackages: ["ahooks"],
};

module.exports = nextConfig;
