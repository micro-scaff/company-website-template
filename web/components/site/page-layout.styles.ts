import styled from "styled-components";

export const Heading = styled.div`margin-bottom: 28px;`;

export const Breadcrumbs = styled.nav`
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  margin-bottom: 24px;
  font-size: 13px;
  color: var(--muted);
  & a { text-underline-offset: 4px; }
`;

export const ModuleGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 20px;
  @media (max-width: 800px) {
    grid-template-columns: minmax(0, 1fr);
    gap: 16px;
  }
`;
