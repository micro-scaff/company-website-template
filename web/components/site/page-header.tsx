import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { PageTitle } from "./shared.styles";
import { Breadcrumbs, Heading } from "./page-layout.styles";

export type PageHeaderProps = {
  title: string;
  home?: boolean;
  parent?: { label: string; href: string };
};

// 页面标题与面包屑独立于内容布局，正式业务页面也可以复用。
export function PageHeader({ title, home = false, parent }: PageHeaderProps) {
  const t = useTranslations("Common");
  const page = useTranslations("Pages");

  return (
    <Heading>
      {!home && (
        <Breadcrumbs aria-label={t("breadcrumbs")}>
          <Link href="/">{page("home")}</Link>
          <span aria-hidden="true">/</span>
          {parent && (
            <>
              <Link href={parent.href}>{parent.label}</Link>
              <span aria-hidden="true">/</span>
            </>
          )}
          <span aria-current="page">{title}</span>
        </Breadcrumbs>
      )}
      <PageTitle>{title}</PageTitle>
    </Heading>
  );
}
