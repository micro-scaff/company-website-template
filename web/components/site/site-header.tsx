import { getTranslations } from "next-intl/server";
import { navigation } from "@/config/navigation";
import { LanguageSwitcher } from "./language-switcher";
import { Navigation } from "./navigation";
import { DesktopNav, Header, HeaderInner, LogoLink, MobileMenu } from "./site-header.styles";

// 文案在服务端翻译后传给交互组件，不把整份词典发送到浏览器。
export async function SiteHeader() {
  const t = await getTranslations("Common");
  const page = await getTranslations("Pages");
  const items = navigation.map(({ label, href }) => ({ label: page(label), href }));

  return (
    <Header>
      <HeaderInner>
        <LogoLink href="/" aria-label={t("backHome")}>Logo</LogoLink>
        <DesktopNav aria-label={t("mainNav")}>
          <Navigation items={items} />
        </DesktopNav>
        <LanguageSwitcher label={t("language")} />
        <MobileMenu>
          <summary>{t("menu")}</summary>
          <nav aria-label={t("mobileNav")}><Navigation items={items} mobile /></nav>
        </MobileMenu>
      </HeaderInner>
    </Header>
  );
}
