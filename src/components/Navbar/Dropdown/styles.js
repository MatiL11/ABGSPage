import styled from "styled-components";
import { FromLeft, ToLeft } from "../../../styles/animations";

export const DropdownContainer = styled.div`
  align-items: center;
  animation: ${({ isOpen }) => (isOpen ? FromLeft : ToLeft)} 0.5s ease-in-out;
  background-color: #103abc;
  display: flex;
  flex-direction: column;
  height: calc(100vh - 100px);
  justify-content: center;
  padding: 0 1rem;
`