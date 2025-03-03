// src/components/Button/Button.tsx
import React from "react";
import * as S from "./Button.styled";

interface ButtonProps {
  onClick: () => void;
  icon: React.ReactNode;
  active?: boolean;
}

const Button: React.FC<ButtonProps> = ({ onClick, icon, active }) => (
  <S.Button onClick={onClick} $active={active}>
    {icon}
  </S.Button>
);

export default Button;
