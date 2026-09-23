import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { navigation } from "@/config/navigation";
import { TextLink } from "./shared.styles";
import { Footer, FooterBottom, FooterInner, FooterNav, FooterTitle } from "./site-footer.styles";

// 页脚独立维护，导航仍与头部共用配置；联系方式保持静态占位。
export async function SiteFooter() {
  const t = await getTranslations("Common");
  const page = await getTranslations("Pages");

  return (
    <Footer>
      <FooterInner>
        <div>
          <FooterTitle>{t("contacts")}</FooterTitle>
          <TextLink href="/contact" aria-label={t("linkTo", { target: page("contact") })}>
            link
          </TextLink>
        </FooterInner>
        <FooterNav aria-label={t("footerNav")}>
          {navigation.map(({ href, label }) => <Link key={href} href={href}>{page(label)}</Link>)}
        </FooterNav>
      </div>
      <FooterBottom>{t("copyright")}</FooterBottom>
    </Footer>
  );
}
