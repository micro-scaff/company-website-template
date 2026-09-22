import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import type messages from "@/messages/zh-CN.json";

// 各页面共用标题翻译逻辑，站点标题模板由语言根布局统一拼接。
export async function createPageMetadata(key: keyof typeof messages.Pages): Promise<Metadata> {
  const t = await getTranslations("Pages");
  return { title: t(key) };
}
