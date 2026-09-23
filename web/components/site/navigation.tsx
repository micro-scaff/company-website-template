"use client";

import { usePathname } from "@/i18n/navigation";
import { getNavigationCurrent } from "@/lib/navigation";
import { NavLink, NavLinks } from "./navigation.styles";

type NavigationProps = {
  items: ReadonlyArray<{ label: string; href: string }>;
  mobile?: boolean;
};

// 接收服务端已翻译的标签，客户端只负责高亮与移动端菜单收起。
export function Navigation({ items, mobile = false }: NavigationProps) {
  const pathname = usePathname();

  return (
    <NavLinks data-mobile={mobile}>
      {items.map(({ label, href }) => (
        <NavLink
          key={href}
          href={href}
          aria-current={getNavigationCurrent(pathname, href)}
          onClick={(event) => event.currentTarget.closest("details")?.removeAttribute("open")}
        >
          {label}
        </NavLink>
      ))}
    </NavLinks>
  );
}
