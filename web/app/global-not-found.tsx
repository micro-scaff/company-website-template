import { routing } from "@/i18n/routing";
import { PageTitle } from "@/components/site/shared.styles";
import { GlobalHomeLink, GlobalNotFoundContent } from "./not-found.styles";
import "./globals.css";

// 此页面不经过语言布局，使用默认语言词典和原生 Link，不读取缺失的语言上下文。
export default async function GlobalNotFound() {
  const messages = (await import(`../messages/${routing.defaultLocale}.json`)).default;
  return (
    <html lang={routing.defaultLocale}>
      <body>
        <GlobalNotFoundContent>
          <PageTitle>{messages.Common.notFound}</PageTitle>
          <GlobalHomeLink href={`/${routing.defaultLocale}`} aria-label={messages.Common.backHome}>link</GlobalHomeLink>
        </GlobalNotFoundContent>
      </body>
    </html>
  );
}
