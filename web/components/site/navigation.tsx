"use client";

import { useTranslations } from "next-intl";
import { Link, usePathname } from "@/i18n/navigation";
import { navigation } from "@/lib/navigation";

export function Navigation() {
  const t = useTranslations("Pages");
  // next-intl 返回不含语言前缀的路径，各语言复用相同高亮规则。
  const pathname = usePathname();

  return (
    <div className="nav-links">
      {navigation.map(({ label, href }) => {
        const exact = pathname === href;
        const active = exact || (href !== "/" && pathname.startsWith(`${href}/`));

        return (
          <Link
            key={href}
            href={href}
            className="nav-link"
            aria-current={exact ? "page" : active ? "location" : undefined}
            // 点击移动端菜单后收起原生 details；桌面导航不受影响。
            onClick={(event) => event.currentTarget.closest("details")?.removeAttribute("open")}
          >
            {t(label)}
          </Link>
        );
      })}
    </div>
  );
}
