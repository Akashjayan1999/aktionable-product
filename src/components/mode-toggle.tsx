"use client";
import * as React from "react";
import { Switch } from "@/components/ui/switch";
import { cn } from "@/lib/utils";
import { useTheme } from "next-themes";
import { useResetThemeOnNavigate } from "@/app/hooks/use-reset-theme";
export function ModeToggle() {
  const { theme, setTheme } = useTheme();
  const isDark = theme === "dark";

  // Use the custom hook to handle theme reset
  useResetThemeOnNavigate();
  
  const handleToggle = (checked: boolean) => {
    setTheme(checked ? "dark" : "light");
  };

  return (
    <Switch
      checked={isDark}
      onCheckedChange={handleToggle}
      className={cn(
        "data-[state=unchecked]:bg-gradient-to-r data-[state=unchecked]:from-[#009588] data-[state=unchecked]:to-[#004487]",
        "data-[state=checked]:bg-gray-300",
        "h-[28px] w-[55px] rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none"
      )}
      classNameThumb={cn(
        "bg-white shadow-md size-[23px] rounded-full",
        "data-[state=checked]:translate-x-[28px]",
        "data-[state=unchecked]:translate-x-[2px]",
        "transition duration-300 ease-in-out"
      )}
    />
  );
}