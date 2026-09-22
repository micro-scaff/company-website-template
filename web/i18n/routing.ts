import { defineRouting } from "next-intl/routing";

// 所有语言路由集中声明；新增语言时同时补充 messages 文件和原生语言名称。
export const routing = defineRouting({
  locales: ["zh-CN", "en", "es"],
  defaultLocale: "zh-CN",
  localePrefix: "always",
  // 无语言前缀时始终进入默认语言，避免浏览器语言影响骨架验收。
  localeDetection: false,
});

export type SiteLocale = (typeof routing.locales)[number];

export const localeNames: Record<SiteLocale, string> = {
  "zh-CN": "简体中文",
  en: "English",
  es: "Español",
};
