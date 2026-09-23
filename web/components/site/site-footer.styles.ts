import styled from "styled-components";
import { containerStyles } from "./shared.styles";

export const Footer = styled.footer`background: var(--footer-background);`;

export const FooterInner = styled.div`
  ${containerStyles}
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: 32px;
  padding-block: 40px;
  @media (max-width: 800px) {
    grid-template-columns: 1fr;
    gap: 24px;
    padding-block: 32px;
  }
`;

export const FooterTitle = styled.p`
  margin: 0 0 16px;
  font-size: 16px;
  font-weight: 500;
`;

export const FooterNav = styled.nav`
  display: flex;
  flex-wrap: wrap;
  gap: 14px 24px;
  & a { font-size: 13px; text-decoration: none; }
  & a:hover { text-decoration: underline; text-underline-offset: 4px; }
`;

export const FooterBottom = styled.div`
  ${containerStyles}
  padding-block: 20px;
  border-top: 1px solid var(--border);
  font-size: 12px;
  color: var(--footer-muted);
`;
