import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { LanguageSwitcher } from "@/components/site/language-switcher";
import { Navigation } from "@/components/site/navigation";
import { navigation } from "@/lib/navigation";

// 所有页面复用外壳；这里只渲染导航与占位文案，不加载公司业务内容。
export async function SiteShell({ children }: { children: React.ReactNode }) {
  const t = await getTranslations("Common");
  const page = await getTranslations("Pages");
  return (
    <div className="site-shell">
      <a className="skip-link" href="#main-content">{t("skip")}</a>
      <header className="site-header">
        <div className="container header-inner">
          <Link className="logo" href="/" aria-label={t("backHome")}>Logo</Link>
          <nav className="desktop-nav" aria-label={t("mainNav")}><Navigation /></nav>
          <LanguageSwitcher />
          <details className="mobile-nav">
            <summary>{t("menu")}</summary>
            <nav aria-label={t("mobileNav")}><Navigation /></nav>
          </details>
        </div>
      </header>
      <main id="main-content" className="container site-main" tabIndex={-1}>{children}</main>
      <footer className="site-footer">
        <div className="container footer-inner">
          <div>
            <p className="footer-title">{t("contacts")}</p>
            <Link className="module-link" href="/contact" aria-label={t("linkTo", { target: page("contact") })}>link</Link>
          </div>
          <nav aria-label={t("footerNav")} className="footer-nav">
            {navigation.map(({ href, label }) => <Link key={href} href={href}>{page(label)}</Link>)}
          </nav>
        </div>
        <div className="container footer-bottom">{t("copyright")}</div>
      </footer>
    </div>
  );
}
