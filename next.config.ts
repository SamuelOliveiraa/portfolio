import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const nextConfig: NextConfig = {
  allowedDevOrigins: ["192.168.0.2", "localhost:3000"],
  experimental: {
    optimizePackageImports: ["react-icons", "lucide-react"]
  },
  images: {
    remotePatterns: [
      new URL("https://avatars.githubusercontent.com/u/86499135?v=4")
    ]
  }
};

const withNextIntl = createNextIntlPlugin("./i18n/request.ts");

export default withNextIntl(nextConfig);
