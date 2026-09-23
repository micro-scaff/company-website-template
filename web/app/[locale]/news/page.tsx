import { getTranslations } from "next-intl/server";
import { createPageMetadata } from "@/lib/metadata";
import { PlaceholderSection } from "@/components/site/placeholder-section";
import { PageLayout } from "@/components/site/page-layout";

// 页面标题随当前语言生成，不在路由文件中硬编码展示文案。
export async function generateMetadata() {
  return createPageMetadata("news");
}

export default async function Page() {
  const page = await getTranslations("Pages");
  const section = await getTranslations("Sections");

  // 仅声明模块布局和真实跳转入口；表单、列表等仍为结构占位。
  return (
    <PageLayout title={page("news")}>
      <PlaceholderSection title={section("intro")} tone="blue" wide />
      <PlaceholderSection title={section("categories")} tone="purple" wide />
      <PlaceholderSection title={section("newsList")} tone="green" href="/news/detail" linkLabel={section("viewNews")} wide />
      <PlaceholderSection title={section("pagination")} tone="gray" wide />
    </PageLayout>
  );
}
