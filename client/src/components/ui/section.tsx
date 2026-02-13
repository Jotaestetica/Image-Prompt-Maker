import { cn } from "@/lib/utils";
import React from "react";

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  variant?: "default" | "muted" | "primary" | "dark";
}

export function Section({ 
  children, 
  className, 
  variant = "default",
  ...props 
}: SectionProps) {
  const variants = {
    default: "bg-background",
    muted: "bg-secondary/50",
    primary: "bg-primary text-primary-foreground",
    dark: "bg-slate-900 text-white",
  };

  return (
    <section 
      className={cn(
        "py-16 md:py-24 overflow-hidden relative",
        variants[variant],
        className
      )} 
      {...props}
    >
      {children}
    </section>
  );
}
