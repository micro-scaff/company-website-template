import * as rootParams from "next/root-params";
import { notFound } from "next/navigation";
import { hasLocale } from "next-intl";
import { getRequestConfig } from "next-intl/server";
import { routing } from "./routing";

export default getRequestConfig(async ({ locale: explicitLocale }) => {
  // Next.js 16.3 的根参数支持静态渲染；显式 locale 用于元信息等服务端调用。
  const locale = explicitLocale ?? (await rootParams.locale());
  if (!hasLocale(routing.locales, locale)) notFound();

  return {
    locale,
    // 先校验语言再加载词典，不允许 URL 任意指定资源文件。
    messages: (await import(`../messages/${locale}.json`)).default,
  };
});
