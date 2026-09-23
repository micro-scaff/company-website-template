import styled, { css } from "styled-components";
import { Link } from "@/i18n/navigation";

// 复用 CSS 片段，不依赖 ThemeProvider；CSS 变量同时适用于服务端与客户端。
export const containerStyles = css`
  width: min(var(--content-width), calc(100% - 48px));
  margin-inline: auto;
  @media (max-width: 800px) { width: calc(100% - 32px); }
`;

export const textLinkStyles = css`
  display: inline-flex;
  align-items: center;
  min-height: 44px;
  min-width: 56px;
  font-size: 15px;
  text-decoration: underline;
  text-underline-offset: 5px;
  &:hover {
    color: var(--color-link-hover);
    text-decoration-thickness: 2px;
  }
`;

export const PageTitle = styled.h1`
  margin: 0;
  font-size: clamp(28px, 4vw, 40px);
  font-weight: 600;
  letter-spacing: -1px;
`;

// 保留 next-intl 的链接行为，不以原生 a 替代语言导航。
export const TextLink = styled(Link)`${textLinkStyles}`;
