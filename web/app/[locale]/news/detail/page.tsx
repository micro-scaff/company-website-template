import { getTranslations } from "next-intl/server";
import { createPageMetadata } from "@/lib/metadata";
import { Section, StructurePage } from "@/components/site/structure";

// 页面标题随当前语言生成，不在路由文件中硬编码展示文案。
export async function generateMetadata() {
  return createPageMetadata("newsDetail");
}

export default async function Page() {
  const page = await getTranslations("Pages");
  const section = await getTranslations("Sections");

  // 仅声明模块布局和真实跳转入口；表单、列表等仍为结构占位。
  return (
    <StructurePage title={page("newsDetail")} parent={{ label: page("news"), href: "/news" }}>
      <Section title={section("newsTitle")} tone="blue" wide />
      <Section title={section("newsCover")} tone="peach" wide />
      <Section title={section("newsBody")} tone="green" wide hero />
      <Section title={section("backNews")} tone="gray" href="/news" wide />
    </StructurePage>
  );
}
