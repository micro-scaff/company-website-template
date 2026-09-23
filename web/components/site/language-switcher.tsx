"use client";

import { useTransition } from "react";
import { hasLocale, useLocale } from "next-intl";
import { usePathname, useRouter } from "@/i18n/navigation";
import { localeNames, routing } from "@/i18n/routing";
import { getLocaleSwitchHref } from "@/lib/navigation";
import { LanguageSelect } from "./language-switcher.styles";

// 语言切换是客户端交互；页面主体和模块仍由服务端渲染。
export function LanguageSwitcher({ label }: { label: string }) {
  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();
  const [pending, startTransition] = useTransition();

  return (
    <LanguageSelect
      aria-label={label}
      value={locale}
      disabled={pending}
      onChange={(event) => {
        const nextLocale = event.target.value;
        if (!hasLocale(routing.locales, nextLocale)) return;
        // 仅替换语言前缀，保留当前详情页、查询参数和咨询表单锚点。
        const href = getLocaleSwitchHref(pathname, window.location.search, window.location.hash);
        startTransition(() => router.replace(href, { locale: nextLocale, scroll: false }));
      }}
    >
      {routing.locales.map((value) => <option key={value} value={value}>{localeNames[value]}</option>)}
    </LanguageSelect>
  );
}
