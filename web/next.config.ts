import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

// 将服务端翻译配置接入 Next.js，页面和客户端共享同一套语言资源。
const withNextIntl = createNextIntlPlugin("./i18n/request.ts");

const nextConfig: NextConfig = {
  // 语言根布局之外的未知地址使用独立的兜底 404。
  experimental: { globalNotFound: true },
};

export default withNextIntl(nextConfig);
