// src/components/ThemeProviderWrapper.tsx
"use client";

import { useDarkMode } from "@/hooks/useDarkMode";
import { GlobalStyle } from "@/styles/GlobalStyle";
import { darkTheme, lightTheme } from "@/styles/theme";
import { ReactNode, useMemo } from "react";
import { ThemeProvider } from "styled-components";

interface ThemeProviderWrapperProps {
  children: ReactNode;
}

const ThemeProviderWrapper = ({ children }: ThemeProviderWrapperProps) => {
  const [theme, toggleTheme] = useDarkMode();

  // 현재 테마에 맞춰 적절한 theme 객체 선택
  const selectedTheme = useMemo(() => (theme === "light" ? lightTheme : darkTheme), [theme]);

  return (
    <ThemeProvider theme={selectedTheme}>
      <GlobalStyle />
      {children}
    </ThemeProvider>
  );
};

export default ThemeProviderWrapper;
