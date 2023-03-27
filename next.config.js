/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  webpack: (config) => {
    config.module.rules.push({
      test: /\.(mov|mp4)$/,
      use: {
        loader: "file-loader",
        options: {
          publicPath: "/_next",
          name: "static/videos/[name].[hash].[ext]",
        },
      },
    });
    return config;
  },
};

module.exports = nextConfig;