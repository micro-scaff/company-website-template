import { getTranslations } from "next-intl/server";
import { createPageMetadata } from "@/lib/metadata";
import { PlaceholderSection } from "@/components/site/placeholder-section";
import { PageLayout } from "@/components/site/page-layout";

// 页面标题随当前语言生成，不在路由文件中硬编码展示文案。
export async function generateMetadata() {
  return createPageMetadata("careerDetail");
}

export default async function Page() {
  const page = await getTranslations("Pages");
  const section = await getTranslations("Sections");

  // 仅声明模块布局和真实跳转入口；表单、列表等仍为结构占位。
  return (
    <PageLayout title={page("careerDetail")} parent={{ label: page("careers"), href: "/careers" }}>
      <PlaceholderSection title={section("jobInfo")} tone="blue" wide />
      <PlaceholderSection title={section("responsibilities")} tone="green" />
      <PlaceholderSection title={section("requirements")} tone="purple" />
      <PlaceholderSection title={section("applicationMethod")} tone="peach" wide />
      <PlaceholderSection title={section("jobForm")} tone="teal" wide />
      <PlaceholderSection title={section("backCareers")} tone="gray" href="/careers" wide />
    </PageLayout>
  );
}
