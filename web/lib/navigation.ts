// 纯路径逻辑不依赖 React 或浏览器，便于覆盖边界情况。
export function getNavigationCurrent(pathname: string, href: string): "page" | "location" | undefined {
  if (pathname === href) return "page";
  if (href !== "/" && pathname.startsWith(`${href}/`)) return "location";
  return undefined;
}

// pathname 来自 next-intl（不含语言前缀），search/hash 来自当前浏览器地址。
// 不重新编码查询字符串，避免重复参数、转义字符与锚点被改变。
export function getLocaleSwitchHref(pathname: string, search: string, hash: string): string {
  return `${pathname}${search}${hash}`;
}
