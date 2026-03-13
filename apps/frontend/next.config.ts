import type { NextConfig } from "next";

const svgrLoader = {
  loader: "@svgr/webpack",
  options: {
    svgo: false,
    icon: false,
  },
} as const;

const nextConfig: NextConfig = {
  reactStrictMode: false,
  serverExternalPackages: ["yjs"],
  turbopack: {
    resolveExtensions: [".mdx", ".tsx", ".ts", ".jsx", ".js", ".mjs", ".json"],
    rules: {
      "*.svg": {
        loaders: [svgrLoader],
        as: "*.js",
      },
    },
  },
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          {
            key: "X-Frame-Options",
            value: "SAMEORIGIN",
          },
          {
            key: "X-Content-Type-Options",
            value: "nosniff",
          },
          {
            key: "Referrer-Policy",
            value: "strict-origin-when-cross-origin",
          },
          {
            key: "X-XSS-Protection",
            value: "1; mode=block",
          },
          {
            key: "Permissions-Policy",
            value: "camera=(), microphone=(), geolocation=()",
          },
          // {
          //   key: "Content-Security-Policy",
          //   value: [
          //     "default-src 'self' blob:",
          //     // - Scripts:
          //     "script-src 'self' 'unsafe-eval' 'unsafe-inline'",
          //     // - Styles: Google Fonts, inline styles
          //     "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
          //     // - Fonts: Google Fonts
          //     "font-src 'self' https://fonts.gstatic.com",
          //     // - Images:
          //     `img-src 'self' data: blob:`,
          //     // - APIs:
          //     `connect-src 'self' blob:`,
          //     // - Frames
          //     "frame-src 'self' blob: data:",
          //     // allow local blob/data media
          //     `media-src 'self' blob: data:`,
          //     "object-src 'self' blob:",
          //     "base-uri 'self' blob:",
          //     "form-action 'self'",
          //     "worker-src 'self' blob:",
          //     "child-src 'self' blob:",
          //     "upgrade-insecure-requests",
          //   ].join("; "),
          // },
        ],
      },
    ];
  },
  webpack(config) {
    const fileLoaderRule = config.module.rules.find((rule: any) =>
      rule.test?.test?.(".svg"),
    );

    config.module.rules.push(
      {
        ...fileLoaderRule,
        test: /\.svg$/i,
        resourceQuery: /url/, // *.svg?url
      },
      {
        test: /\.svg$/i,
        issuer: fileLoaderRule.issuer,
        resourceQuery: { not: [...fileLoaderRule.resourceQuery.not, /url/] }, // exclude if *.svg?url
        use: [svgrLoader],
      },
    );

    fileLoaderRule.exclude = /\.svg$/i;

    config.cache = {
      ...config.cache,
      type: "filesystem",
      compression: "gzip",
      maxAge: 172800000, // 2 days
    };

    return config;
  },
};

export default nextConfig;
