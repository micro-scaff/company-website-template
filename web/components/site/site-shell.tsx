import { getTranslations } from "next-intl/server";
import { SiteHeader } from "./site-header";
import { SiteFooter } from "./site-footer";
import { Main, Shell, SkipLink } from "./site-shell.styles";

// 外壳仅组合头部、主内容与页脚，不承担各区域内部的展示逻辑。
export async function SiteShell({ children }: { children: React.ReactNode }) {
  const t = await getTranslations("Common");

  return (
    <Shell>
      <SkipLink href="#main-content">{t("skip")}</SkipLink>
      <SiteHeader />
      <Main id="main-content" tabIndex={-1}>
        {children}
      </Main>
      <SiteFooter />
    </Shell>
  );
}
