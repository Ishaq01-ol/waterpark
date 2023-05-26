/* eslint-disable */
const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true",
});

module.exports = withBundleAnalyzer({

  async redirects() {
    return [
      {
        source: "/",
        destination: "/dashboard",
        permanent: true,
      },
    ];
  },
  env: {
    // Will only be available on the server side
    // Pass through env variables
    JWT_SECRET: process.env.JWT_SECRET,
    FRONT_END_URL: process.env.FRONT_END_URL,
    MONGO_URL: process.env.MONGO_URL,
    NOTIFICATION_EMAIL: process.env.NOTIFICATION_EMAIL,
    NOTIFICATION_PASS: process.env.NOTIFICATION_PASS,
  },
  serverRuntimeConfig: {
    // Will only be available on the server side
    // Pass through env variables
    JWT_SECRET: process.env.JWT_SECRET,
    FRONT_END_URL:process.env.FRONT_END_URL,
    MONGO_URL: process.env.MONGO_URL,
    NOTIFICATION_EMAIL: process.env.NOTIFICATION_EMAIL,
    NOTIFICATION_PASS: process.env.NOTIFICATION_PASS,
  },
  images: {
    unoptimized: true,
  },
  eslint: {
    dirs: ["."],
  },
  trailingSlash: true,
  basePath: "",
  // The starter code load resources from `public` folder with `router?.basePath` in React components.
  // So, the source code is "basePath-ready".
  // You can remove `basePath` if you don't need it.
  reactStrictMode: true,
  webpack: (config) => {
    if (!config.experiments) {
      config.experiments = {}
    }
    config.experiments.topLevelAwait = true;
    return config
  }
});