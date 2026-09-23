import { useTranslations } from "next-intl";
import { TextLink } from "./shared.styles";
import { SectionBlock } from "./placeholder-section.styles";

type PlaceholderSectionProps = {
  title: string;
  tone: "blue" | "green" | "purple" | "peach" | "yellow" | "teal" | "pink" | "gray";
  href?: string;
  linkLabel?: string;
  wide?: boolean;
  hero?: boolean;
  id?: string;
};

// 仅用于骨架验收；后续替换为独立业务组件，不向此组件堆叠业务逻辑。
export function PlaceholderSection({
  title, tone, href, linkLabel, wide, hero, id,
}: PlaceholderSectionProps) {
  const t = useTranslations("Common");

  return (
    <SectionBlock data-tone={tone} data-wide={wide} data-hero={hero} id={id} aria-label={title}>
      <h2>{title}</h2>
      {/* 视觉上统一显示 link；辅助阅读标签说明实际目标。 */}
      {href && (
        <TextLink href={href} aria-label={t("linkTo", { target: linkLabel ?? title })}>
          link
        </TextLink>
      )}
    </SectionBlock>
  );
}
