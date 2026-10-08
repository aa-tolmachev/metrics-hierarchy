const isStaticExport = process.env.STATIC_EXPORT === "true";

const nextConfig = {
	reactStrictMode: false,
	basePath: process.env.NEXT_PUBLIC_BASE_PATH ?? "",
	transpilePackages: ["ahooks"],
	...(isStaticExport && {
		output: "export",
		trailingSlash: true,
		images: { unoptimized: true },
	}),
};

module.exports = nextConfig;
