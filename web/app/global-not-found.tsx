import Link from "next/link";
import { routing } from "@/i18n/routing";
import "./globals.css";

// 此页面不经过语言布局，使用默认语言词典和原生 Link，不读取缺失的语言上下文。
export default async function GlobalNotFound() {
  const messages = (await import(`../messages/${routing.defaultLocale}.json`)).default;
  return (
    <html lang={routing.defaultLocale}>
      <body>
        <main className="container not-found">
          <h1>{messages.Common.notFound}</h1>
          <Link className="module-link" href={`/${routing.defaultLocale}`} aria-label={messages.Common.backHome}>link</Link>
        </main>
      </body>
    </html>
  );
}
