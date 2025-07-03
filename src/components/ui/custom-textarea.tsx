import * as React from "react";
import { Textarea } from "@/components/ui/textarea";

interface CustomTextareaProps extends React.ComponentPropsWithoutRef<typeof Textarea> {
  label?: string;
  error?: string;
  requiredMark?: boolean;
  htmlFor?: string;
}

export const CustomTextarea = React.forwardRef<HTMLTextAreaElement, CustomTextareaProps>(
  ({ label, error, requiredMark = false, className = "",htmlFor, ...props }, ref) => (
    <div>
      {label && (
        <label className="block text-base font-medium mb-1" htmlFor={htmlFor||""}>
          {label}
          {requiredMark && <span className="text-red-500">*</span>}
        </label>
      )}
      <Textarea
        ref={ref}
        className={`shadow-none border-1 border-[rgba(76,76,76,0.4)] h-25 !placeholder-[rgba(0,0,0,0.5)] focus:!ring-0 w-full rounded ${error ? "border-red-500" : ""} ${className}`}
        {...props}
      />
      {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
    </div>
  )
);

CustomTextarea.displayName = "CustomTextarea";