import * as React from "react";
import { Input } from "@/components/ui/input";

interface CustomInputProps extends React.ComponentPropsWithoutRef<typeof Input> {
  label?: string;
  error?: string;
  requiredMark?: boolean;
  htmlFor?: string;
}

export const CustomInput = React.forwardRef<HTMLInputElement, CustomInputProps>(
  ({ label, error, requiredMark = false, className = "",htmlFor, ...props }, ref) => (
    <div>
      {label && (
        <label className="block text-base font-medium mb-1" htmlFor={htmlFor||""}>
          {label}
          {requiredMark && <span className="text-red-500">*</span>}
        </label>
      )}
      <Input
        ref={ref}
        className={`shadow-none border-1 border-[rgba(76,76,76,0.4)] h-12 !placeholder-[rgba(0,0,0,0.5)] focus:!ring-0 w-full rounded ${error ? "border-red-500" : ""} ${className}`}
        {...props}
      />
      {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
    </div>
  )
);

CustomInput.displayName = "CustomInput";