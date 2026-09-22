"use client";

import { useTransition } from "react";
import { hasLocale, useLocale, useTranslations } from "next-intl";
import { usePathname, useRouter } from "@/i18n/navigation";
import { localeNames, routing } from "@/i18n/routing";

// 语言切换是客户端交互；页面主体和模块仍由服务端渲染。
export function LanguageSwitcher() {
  const locale = useLocale();
  const t = useTranslations("Common");
  const pathname = usePathname();
  const router = useRouter();
  const [pending, startTransition] = useTransition();

  return (
    <select
      className="language-switcher"
      aria-label={t("language")}
      value={locale}
      disabled={pending}
      onChange={(event) => {
        const nextLocale = event.target.value;
        if (!hasLocale(routing.locales, nextLocale)) return;
        // 仅替换语言前缀，保留当前详情页、查询参数和咨询表单锚点。
        const href = `${pathname}${window.location.search}${window.location.hash}`;
        startTransition(() => router.replace(href, { locale: nextLocale, scroll: false }));
      }}
    >
      {routing.locales.map((value) => <option key={value} value={value}>{localeNames[value]}</option>)}
    </select>
  );
}
