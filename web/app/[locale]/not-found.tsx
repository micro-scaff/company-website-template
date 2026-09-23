import { getTranslations } from "next-intl/server";
import { PageTitle, TextLink } from "@/components/site/shared.styles";
import { NotFoundContent } from "../not-found.styles";

// 已识别语言的未知页面使用当前词典，返回首页时保留语言。
export default async function NotFound() {
  const t = await getTranslations("Common");
  return (
    <NotFoundContent>
      <PageTitle>{t("notFound")}</PageTitle>
      <TextLink href="/" aria-label={t("linkTo", { target: t("backHome") })}>link</TextLink>
    </NotFoundContent>
  );
}
