import { getTranslations } from "next-intl/server";
import { createPageMetadata } from "@/lib/metadata";
import { Section, StructurePage } from "@/components/site/structure";

// 页面标题随当前语言生成，不在路由文件中硬编码展示文案。
export async function generateMetadata() {
  return createPageMetadata("productDetail");
}

export default async function Page() {
  const page = await getTranslations("Pages");
  const section = await getTranslations("Sections");

  // 仅声明模块布局和真实跳转入口；表单、列表等仍为结构占位。
  return (
    <StructurePage title={page("productDetail")} parent={{ label: page("products"), href: "/products" }}>
      <Section title={section("productIntro")} tone="blue" wide hero />
      <Section title={section("productImages")} tone="gray" />
      <Section title={section("scope")} tone="green" />
      <Section title={section("price")} tone="yellow" />
      <Section title={section("sla")} tone="purple" />
      <Section title={section("customers")} tone="peach" wide />
      <Section title={section("consultation")} tone="teal" href="/contact#consultation" />
      <Section title={section("backProducts")} tone="pink" href="/products" />
    </StructurePage>
  );
}
