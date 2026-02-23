import * as React from "react";
import { cn } from "@/lib/utils";

const Textarea = React.forwardRef<HTMLTextAreaElement, React.TextareaHTMLAttributes<HTMLTextAreaElement>>(
  ({ className, ...props }, ref) => (
    <textarea className={cn("theme-input flex min-h-[80px] w-full rounded-xl px-4 py-3 text-sm resize-none disabled:cursor-not-allowed disabled:opacity-50", className)}
      ref={ref} {...props} />
  )
);
Textarea.displayName = "Textarea";
export { Textarea };
