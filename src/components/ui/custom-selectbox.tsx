import * as React from "react";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";

interface CustomSelectProps {
  label?: string;
  requiredMark?: boolean;
  error?: string;
  placeholder?: string;
  value?: string;
  onValueChange?: (value: string) => void;
  children: React.ReactNode;
  className?: string;
  htmlFor?: string;
}

export const CustomSelect: React.FC<CustomSelectProps> = ({
  label,
  requiredMark = false,
  error,
  placeholder = "Select...",
  value,
  onValueChange,
  children,
  className = "",
  htmlFor,
}) => (
  <div className="project-container">
    {label && (
      <label className="block text-base font-medium mb-1" htmlFor={htmlFor||""}>
        {label}
        {requiredMark && <span className="text-red-500">*</span>}
      </label>
    )}
    <Select value={value} onValueChange={onValueChange}>
      <SelectTrigger
        className={`${error ? "border-red-500" : ""} w-full !h-12 shadow-none border-1 border-[rgba(76,76,76,0.4)] ${className}`}
      >
        <SelectValue placeholder={placeholder} />
      </SelectTrigger>
      <SelectContent className="font-varela-round">{children}</SelectContent>
    </Select>
    {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
  </div>
);