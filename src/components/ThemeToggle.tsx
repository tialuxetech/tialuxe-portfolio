"use client";

import { useTheme } from "next-themes";

export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  return <button className="theme-toggle" type="button" aria-label="Toggle color theme" onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}><span className="icon-moon" aria-hidden="true">☾</span><span className="icon-sun" aria-hidden="true">☀</span></button>;
}
