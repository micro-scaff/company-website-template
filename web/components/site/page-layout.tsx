import { PageHeader, type PageHeaderProps } from "./page-header";
import { ModuleGrid } from "./page-layout.styles";

// 页面只组合标题和内容网格，不感知占位色块或具体业务模块。
export function PageLayout({ children, ...header }: PageHeaderProps & {
  children: React.ReactNode;
}) {
  return (
    <>
      <PageHeader {...header} />
      <ModuleGrid>{children}</ModuleGrid>
    </>
  );
}
