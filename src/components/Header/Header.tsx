// src/components/Header/Header.tsx
"use client";

import { useDarkMode } from "@/hooks/useDarkMode";
import { FiMoon, FiSun } from "react-icons/fi";
import Button from "../Button/Button";
import * as S from "./Header.styled";

const Header = () => {
  const [theme, toggleTheme] = useDarkMode();

  return (
    <S.Container>
      <S.Logo>MyLog</S.Logo>
      <Button onClick={toggleTheme} active={theme === "dark"} icon={theme === "dark" ? <FiMoon /> : <FiSun />} />
    </S.Container>
  );
};

export default Header;
