import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

// 将服务端翻译配置接入 Next.js，页面和客户端共享同一套语言资源。
const withNextIntl = createNextIntlPlugin("./i18n/request.ts");

const nextConfig: NextConfig = {
  // 开发环境允许任意带点号的主机名或 IP 访问 HMR 等 Next.js 内部资源。
  // localhost 和启动 dev server 时使用的主机名由 Next.js 默认放行。
  allowedDevOrigins: ["**.*"],
  // 稳定服务端/客户端组件 ID，启用 styled-components 的编译优化。
  compiler: { styledComponents: true },
  // 语言根布局之外的未知地址使用独立的兜底 404。
  experimental: { globalNotFound: true },
};

export default withNextIntl(nextConfig);
