// src/components/Button/Button.styled.ts
import styled from "styled-components";

export const Button = styled.button<{ $active?: boolean }>`
  width: 2.5rem;
  height: 2.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ $active }) => ($active ? "#dfe8fd" : "#e6efff")};
  border: none;
  border-radius: 50%;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #dfe8fd;
  }

  svg {
    width: 1.25rem;
    height: 1.25rem;
    color: #333;
  }
`;
