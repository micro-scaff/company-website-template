import styled from "styled-components";

// 由客户端语言切换组件使用；SSR 样式由根布局中的注册器收集。
export const LanguageSelect = styled.select`
  min-height: 44px;
  max-width: 140px;
  padding: 8px;
  border: 1px solid var(--border);
  border-radius: 6px;
  background: var(--surface);
  font: inherit;
  font-size: 14px;
  &:disabled { opacity: 0.6; cursor: wait; }
  @media (max-width: 1200px) { margin-left: auto; }
`;
