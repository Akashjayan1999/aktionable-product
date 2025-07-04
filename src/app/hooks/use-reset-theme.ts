"use client";
import { useEffect } from "react";
import { useTheme } from "next-themes";

export function useResetThemeOnNavigate() {
  const { setTheme } = useTheme();

  useEffect(() => {
    // Handle page unload/refresh
    const handleBeforeUnload = () => {
      setTheme("light");
    };

    // Handle navigation (when user clicks browser back/forward)
    const handlePopState = () => {
      setTheme("light");
    };

    window.addEventListener("beforeunload", handleBeforeUnload);
    window.addEventListener("popstate", handlePopState);
    
    // Reset theme when component unmounts (navigation via Next.js router)
    return () => {
      console.log("Resetting theme on unmount");
      window.removeEventListener("beforeunload", handleBeforeUnload);
      window.removeEventListener("popstate", handlePopState);
      setTheme("light");
    };
  }, [setTheme]);
}