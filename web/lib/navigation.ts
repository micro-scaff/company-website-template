// 只保存翻译 key 和不含语言前缀的路径，头部、移动端和页脚复用同一份导航。
export const navigation = [
  { label: "home", href: "/" },
  { label: "services", href: "/services" },
  { label: "products", href: "/products" },
  { label: "about", href: "/about" },
  { label: "news", href: "/news" },
  { label: "contact", href: "/contact" },
  { label: "partners", href: "/partners" },
  { label: "careers", href: "/careers" },
] as const;
