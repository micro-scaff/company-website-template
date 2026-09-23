import { getTranslations } from "next-intl/server";
import { createPageMetadata } from "@/lib/metadata";
import { PlaceholderSection } from "@/components/site/placeholder-section";
import { PageLayout } from "@/components/site/page-layout";

// 页面标题随当前语言生成，不在路由文件中硬编码展示文案。
export async function generateMetadata() {
  return createPageMetadata("serviceDetail");
}

export default async function Page() {
  const page = await getTranslations("Pages");
  const section = await getTranslations("Sections");

  // 仅声明模块布局和真实跳转入口；表单、列表等仍为结构占位。
  return (
    <PageLayout title={page("serviceDetail")} parent={{ label: page("services"), href: "/services" }}>
      <PlaceholderSection title={section("services")} tone="blue" wide hero />
      <PlaceholderSection title={section("serviceContent")} tone="green" />
      <PlaceholderSection title={section("standards")} tone="purple" />
      <PlaceholderSection title={section("customers")} tone="yellow" />
      <PlaceholderSection title={section("value")} tone="peach" />
      <PlaceholderSection title={section("process")} tone="pink" wide />
      <PlaceholderSection title={section("consultation")} tone="teal" href="/contact#consultation" />
      <PlaceholderSection title={section("backServices")} tone="gray" href="/services" />
    </PageLayout>
  );
}
