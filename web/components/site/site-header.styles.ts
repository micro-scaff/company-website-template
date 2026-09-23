import styled from "styled-components";
import { Link } from "@/i18n/navigation";
import { containerStyles } from "./shared.styles";

export const Header = styled.header`
  background: var(--surface);
  border-bottom: 1px solid var(--border-subtle);
`;

export const HeaderInner = styled.div`
  ${containerStyles}
  min-height: 88px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
  @media (max-width: 1200px) {
    min-height: 72px;
    flex-wrap: wrap;
    padding-block: 16px;
  }
`;

export const LogoLink = styled(Link)`
  font-size: 22px;
  font-weight: 700;
  text-decoration: none;
  letter-spacing: -1px;
`;

export const DesktopNav = styled.nav`
  display: flex;
  align-items: center;
  gap: 18px;
  @media (max-width: 1200px) { display: none; }
`;

// 使用原生 details，保留键盘可操作性和现有折叠行为。
export const MobileMenu = styled.details`
  display: none;
  @media (max-width: 1200px) {
    display: block;
    & summary { cursor: pointer; padding: 10px; font-size: 14px; }
    &[open] { width: 100%; margin-left: 0; }
  }
`;
