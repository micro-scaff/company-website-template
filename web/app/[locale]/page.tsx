import { getTranslations } from "next-intl/server";
import { createPageMetadata } from "@/lib/metadata";
import { PlaceholderSection } from "@/components/site/placeholder-section";
import { PageLayout } from "@/components/site/page-layout";

// 页面标题随当前语言生成，不在路由文件中硬编码展示文案。
export async function generateMetadata() {
  return createPageMetadata("home");
}

export default async function Page() {
  const page = await getTranslations("Pages");
  const section = await getTranslations("Sections");

  // 仅声明模块布局和真实跳转入口；表单、列表等仍为结构占位。
  return (
    <PageLayout home title={page("home")}>
      <PlaceholderSection title={section("banner")} tone="blue" wide hero />
      <PlaceholderSection title={section("positioning")} tone="gray" />
      <PlaceholderSection title={section("services")} tone="green" href="/services" />
      <PlaceholderSection title={section("serviceChain")} tone="peach" wide />
      <PlaceholderSection title={section("advantages")} tone="purple" />
      <PlaceholderSection title={section("partnershipModel")} tone="yellow" href="/partners" />
      <PlaceholderSection title={section("consultation")} tone="teal" href="/contact#consultation" wide />
    </PageLayout>
  );
}
