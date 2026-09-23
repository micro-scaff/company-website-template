import styled from "styled-components";
import { containerStyles } from "./shared.styles";

// 服务端展示样式无需 use client，保持官网正文的服务端渲染边界。
export const Shell = styled.div`
  min-height: 100svh;
  display: flex;
  flex-direction: column;
`;

export const Main = styled.main`
  ${containerStyles}
  flex: 1;
  padding-block: 40px 72px;
  @media (max-width: 800px) { padding-block: 28px 40px; }
`;

export const SkipLink = styled.a`
  position: fixed;
  top: 12px;
  left: 12px;
  z-index: 20;
  padding: 12px 18px;
  background: var(--surface);
  transform: translateY(-160%);
  &:focus { transform: translateY(0); }
`;
