import styled from "styled-components";

export const FlexContainer = styled.div`
  align-items: center;
  display: flex;
  flex-direction: ${({ row }) => (row ? "row" : "column")};
  justify-content: center;
  width: 100%;
  padding-bottom: 2rem;
  padding-top: 2rem;
`;
