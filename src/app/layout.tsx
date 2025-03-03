// src/app/layout.tsx
import Header from "@/components/Header/Header";
import ThemeProviderWrapper from "@/components/ThemeProviderWrapper";
import type { ReactNode } from "react";

export const metadata = {
  title: "My Blog",
  description: "Personal blog using Next.js and Styled-Components",
};

interface LayoutProps {
  children: ReactNode;
}

export default function RootLayout({ children }: LayoutProps) {
  return (
    <html lang="ko">
      <body>
        <ThemeProviderWrapper>
          <Header />
          {children}
        </ThemeProviderWrapper>
      </body>
    </html>
  );
}
