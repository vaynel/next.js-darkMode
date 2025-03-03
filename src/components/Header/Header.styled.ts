import styled from "styled-components";

export const Container = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background-color: ${({ theme }) =>{
    console.log("음 바뀌나? : "+theme.background)
    return theme.background
  } };
  box-shadow: 0 0.125rem 0.25rem rgba(0, 0, 0, 0.1);
`;

export const Logo = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
  color: ${({ theme }) => theme.text};
`;
