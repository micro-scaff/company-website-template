import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";

// 已识别语言的未知页面使用当前词典，返回首页时保留语言。
export default async function NotFound() {
  const t = await getTranslations("Common");
  return (
    <div className="not-found">
      <h1>{t("notFound")}</h1>
      <Link className="module-link" href="/" aria-label={t("linkTo", { target: t("backHome") })}>link</Link>
    </div>
  );
}
