import createMiddleware from "next-intl/middleware";
import { routing } from "./i18n/routing";

// 补全官网语言前缀；后台、接口、静态资源不参与官网语言重定向。
export default createMiddleware(routing);

export const config = {
  matcher: "/((?!api|admin|media|preview|_next|_vercel|.*\\..*).*)",
};
