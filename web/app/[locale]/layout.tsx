import type { Metadata } from "next";
import { hasLocale, NextIntlClientProvider } from "next-intl";
import { getTranslations } from "next-intl/server";
import { notFound } from "next/navigation";
import { SiteShell } from "@/components/site/site-shell";
import { routing } from "@/i18n/routing";
import "../globals.css";

type Props = {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
};

// 骨架只开放已配置语言；无效语言在路由层进入全局 404。
export const dynamicParams = false;

// 当前骨架的所有语言均在构建时预生成，语言数量不依赖页面代码。
export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations("Common");
  return {
    title: { default: t("brand"), template: `%s | ${t("brand")}` },
    description: t("description"),
  };
}

export default async function LocaleLayout({ children, params }: Props) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) notFound();

  // 根布局放在 [locale] 下，使 HTML 语言、服务端词典和客户端上下文保持一致。
  return (
    <html lang={locale}>
      <body>
        <NextIntlClientProvider>
          <SiteShell>{children}</SiteShell>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
