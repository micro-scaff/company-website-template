import styled from "styled-components";
import { Link } from "@/i18n/navigation";

// 有限状态使用 data 属性，避免每种状态生成一套动态样式。
export const NavLinks = styled.div`
  display: flex;
  align-items: center;
  gap: 18px;
  @media (max-width: 1200px) {
    &[data-mobile="true"] {
      display: grid;
      grid-template-columns: repeat(2, minmax(0, 1fr));
      gap: 4px 24px;
      padding-top: 12px;
    }
    &[data-mobile="true"] a { white-space: normal; overflow-wrap: anywhere; }
  }
`;

export const NavLink = styled(Link)`
  font-size: 14px;
  text-decoration: none;
  padding: 12px 0;
  border-bottom: 2px solid transparent;
  white-space: nowrap;
  &:hover, &[aria-current] { color: var(--accent); border-bottom-color: var(--accent); }
`;
