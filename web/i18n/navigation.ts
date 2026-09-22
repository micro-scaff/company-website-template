import { createNavigation } from "next-intl/navigation";
import { routing } from "./routing";

// 站内链接只写 /services 等业务路径，由 next-intl 自动保留当前语言前缀。
export const { Link, redirect, usePathname, useRouter, getPathname } =
  createNavigation(routing);
