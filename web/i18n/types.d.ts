import type messages from "../messages/zh-CN.json";
import type { SiteLocale } from "./routing";

// 翻译 key 和语言代码参与类型检查，避免页面中出现拼写错误。
declare module "next-intl" {
  interface AppConfig {
    Locale: SiteLocale;
    Messages: typeof messages;
  }
}
