import styled from "styled-components";

// 色块与尺寸均为有限变体；不透传业务属性，不依赖客户端运行时决定布局。
export const SectionBlock = styled.section`
  min-height: 220px;
  padding: 32px;
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: 24px;
  scroll-margin-top: 24px;

  & h2 { margin: 0; font-size: 20px; font-weight: 500; overflow-wrap: anywhere; }
  &[data-wide="true"] { grid-column: 1 / -1; }
  &[data-hero="true"] { min-height: 320px; }
  &[data-hero="true"] h2 { font-size: clamp(24px, 4vw, 36px); }
  &[data-tone="blue"] { background: #deebf5; }
  &[data-tone="green"] { background: #e0eee3; }
  &[data-tone="purple"] { background: #ebe3f2; }
  &[data-tone="peach"] { background: #f8e7d9; }
  &[data-tone="yellow"] { background: #f2eed3; }
  &[data-tone="teal"] { background: #dceeea; }
  &[data-tone="pink"] { background: #f3e1e6; }
  &[data-tone="gray"] { background: #e8ecec; }

  @media (max-width: 800px) {
    min-height: 180px;
    padding: 24px;
    &[data-hero="true"] { min-height: 260px; }
  }
`;
