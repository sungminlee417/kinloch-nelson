"use client";

import React, { createContext, useContext, useEffect, useState } from "react";

type Theme = "light" | "dark" | "system";

interface ThemeContextType {
  theme: Theme;
  setTheme: (theme: Theme) => void;
  resolvedTheme: "light" | "dark";
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

interface ThemeProviderProps {
  children: React.ReactNode;
  defaultTheme?: Theme;
}

// Get initial theme that matches server-side script
function getInitialTheme(): { theme: Theme; resolvedTheme: "light" | "dark" } {
  if (typeof window === "undefined") {
    return { theme: "system", resolvedTheme: "light" };
  }

  const savedTheme = localStorage.getItem("theme") as Theme | null;
  const systemTheme = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
  const initialTheme = savedTheme || "system";
  
  let resolvedTheme: "light" | "dark";
  if (initialTheme === "system") {
    resolvedTheme = systemTheme;
  } else {
    resolvedTheme = initialTheme;
  }

  return { theme: initialTheme, resolvedTheme };
}

export function ThemeProvider({ children }: ThemeProviderProps) {
  const [mounted, setMounted] = useState(false);
  const [theme, setTheme] = useState<Theme>("system");
  const [resolvedTheme, setResolvedTheme] = useState<"light" | "dark">("light");

  // Initialize theme state after component mounts to match server
  useEffect(() => {
    const { theme: initialTheme, resolvedTheme: initialResolvedTheme } = getInitialTheme();
    setTheme(initialTheme);
    setResolvedTheme(initialResolvedTheme);
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;

    const root = document.documentElement;
    let effectiveTheme: "light" | "dark";

    if (theme === "system") {
      effectiveTheme = window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light";
    } else {
      effectiveTheme = theme;
    }

    // Only update if different from current resolved theme
    if (effectiveTheme !== resolvedTheme) {
      root.classList.remove("light", "dark");
      root.classList.add(effectiveTheme);
      root.setAttribute("data-theme", effectiveTheme);
      setResolvedTheme(effectiveTheme);
    }

    // Save to localStorage
    localStorage.setItem("theme", theme);
  }, [theme, mounted, resolvedTheme]);

  // Handle system theme changes
  useEffect(() => {
    if (!mounted || theme !== "system") return;

    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    const handleChange = () => {
      const newResolvedTheme = mediaQuery.matches ? "dark" : "light";
      if (newResolvedTheme !== resolvedTheme) {
        const root = document.documentElement;
        root.classList.remove("light", "dark");
        root.classList.add(newResolvedTheme);
        root.setAttribute("data-theme", newResolvedTheme);
        setResolvedTheme(newResolvedTheme);
      }
    };

    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, [theme, mounted, resolvedTheme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme, resolvedTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
}
