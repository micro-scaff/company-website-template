import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";

type SectionProps = {
  title: string;
  tone: "blue" | "green" | "purple" | "peach" | "yellow" | "teal" | "pink" | "gray";
  href?: string;
  linkLabel?: string;
  wide?: boolean;
  hero?: boolean;
  id?: string;
};

export function Section({ title, tone, href, linkLabel, wide, hero, id }: SectionProps) {
  const t = useTranslations("Common");
  // 模块只负责颜色、尺寸和可选跳转，不在骨架阶段填充业务数据。
  const className = ["module", `module--${tone}`, wide && "module--wide", hero && "module--hero"].filter(Boolean).join(" ");

  return (
    <section className={className} id={id} aria-label={title}>
      <h2>{title}</h2>
      {/* 视觉上统一显示 link；辅助阅读标签说明实际目标。 */}
      {href && <Link className="module-link" href={href} aria-label={t("linkTo", { target: linkLabel ?? title })}>link</Link>}
    </section>
  );
}

export function StructurePage({ title, home = false, parent, children }: {
  title: string;
  home?: boolean;
  parent?: { label: string; href: string };
  children: React.ReactNode;
}) {
  const t = useTranslations("Common");
  const page = useTranslations("Pages");
  // 用显式 home 标记控制面包屑，不依赖会随语言改变的标题文本。
  return (
    <>
      <div className="page-heading">
        {!home && (
          <nav className="breadcrumbs" aria-label={t("breadcrumbs")}>
            <Link href="/">{page("home")}</Link>
            <span aria-hidden="true">/</span>
            {parent && <><Link href={parent.href}>{parent.label}</Link><span aria-hidden="true">/</span></>}
            <span aria-current="page">{title}</span>
          </nav>
        )}
        <h1>{title}</h1>
      </div>
      <div className="module-grid">{children}</div>
    </>
  );
}
