// src/components/ThemeProviderWrapper.tsx
"use client";

import { ThemeContextProvider, useThemeContext } from "@/context/ThemeContext";
import { GlobalStyle } from "@/styles/GlobalStyle";
import { darkTheme, lightTheme } from "@/styles/theme";
import { ReactNode, useMemo } from "react";
import { ThemeProvider } from "styled-components";

interface ThemeProviderWrapperProps {
  children: ReactNode;
}

const ThemeWrapper = ({ children }: { children: ReactNode }) => {
  const { theme } = useThemeContext();
  const selectedTheme = useMemo(() => (theme === "light" ? lightTheme : darkTheme), [theme]);

  return (
    <ThemeProvider theme={selectedTheme}>
      <GlobalStyle />
      {children}
    </ThemeProvider>
  );
};

const ThemeProviderWrapper = ({ children }: ThemeProviderWrapperProps) => {
  return (
    <ThemeContextProvider>
      <ThemeWrapper>{children}</ThemeWrapper>
    </ThemeContextProvider>
  );
};

export default ThemeProviderWrapper;
