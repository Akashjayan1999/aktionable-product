"use client"

import { useResetThemeOnNavigate } from "@/app/hooks/use-reset-theme";

export function ThemeResetProvider({ children }: { children: React.ReactNode }) {

  useResetThemeOnNavigate();
  return <>{children}</>;
}