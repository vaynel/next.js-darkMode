"use client";
import { useEffect, useState } from "react";

export const useDarkMode = (): ["light" | "dark", () => void] => {
  // 🚀 초기 상태를 `undefined`로 설정하여 SSR에서 Hydration 문제 방지
  const [theme, setTheme] = useState<"light" | "dark" | undefined>(undefined);

  useEffect(() => {
    // 🚀 클라이언트에서 localStorage 값을 읽고 설정 (서버에서는 실행되지 않음)
    const savedTheme = (localStorage.getItem("theme") as "light" | "dark") || "light";
    setTheme(savedTheme);
    document.body.setAttribute("data-theme", savedTheme);
  }, []);

  const toggleTheme = () => {
    setTheme((prev) => {
        console.log(prev)
        return prev === "light" ? "dark" : "light"}
    );
  };

  useEffect(() => {
    if (theme) {
      localStorage.setItem("theme", theme);
      document.body.setAttribute("data-theme", theme);
    }
  }, [theme]);

  return [theme ?? "light", toggleTheme]; // 🚀 초기값이 `undefined`이면 "light" 반환
};
