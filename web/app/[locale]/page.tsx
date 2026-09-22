import { getTranslations } from "next-intl/server";
import { createPageMetadata } from "@/lib/metadata";
import { Section, StructurePage } from "@/components/site/structure";

// 页面标题随当前语言生成，不在路由文件中硬编码展示文案。
export async function generateMetadata() {
  return createPageMetadata("home");
}

export default async function Page() {
  const page = await getTranslations("Pages");
  const section = await getTranslations("Sections");

  // 仅声明模块布局和真实跳转入口；表单、列表等仍为结构占位。
  return (
    <StructurePage home title={page("home")}>
      <Section title={section("banner")} tone="blue" wide hero />
      <Section title={section("positioning")} tone="gray" />
      <Section title={section("services")} tone="green" href="/services" />
      <Section title={section("serviceChain")} tone="peach" wide />
      <Section title={section("advantages")} tone="purple" />
      <Section title={section("partnershipModel")} tone="yellow" href="/partners" />
      <Section title={section("consultation")} tone="teal" href="/contact#consultation" wide />
    </StructurePage>
  );
}
