import styled, { css } from "styled-components";
import Link from "next/link";
import { containerStyles, textLinkStyles } from "@/components/site/shared.styles";

// 全局 404 不经过官网外壳，也不读取 next-intl 的语言上下文。
const contentStyles = css`
  min-height: 70svh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 24px;
`;

export const NotFoundContent = styled.div`${contentStyles}`;
export const GlobalNotFoundContent = styled.main`${containerStyles} ${contentStyles}`;
export const GlobalHomeLink = styled(Link)`${textLinkStyles}`;
