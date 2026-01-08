import { forwardRef } from "react";

const badgeStyles = {
  base: "inline-flex items-center justify-center font-medium transition-colors cursor-default",
  
  variants: {
    primary: "bg-primary-50 text-primary-700 border border-primary-100",
    secondary: "bg-neutral-100 text-neutral-700 border border-neutral-200",
    outline: "bg-transparent text-neutral-600 border border-neutral-200",
    success: "bg-emerald-50 text-emerald-700 border border-emerald-100",
    error: "bg-red-50 text-red-700 border border-red-100",
    warning: "bg-amber-50 text-amber-700 border border-amber-100",
  },
  
  sizes: {
    sm: "px-2 py-0.5 text-[10px] rounded-md",
    md: "px-2.5 py-1 text-xs rounded-lg", 
    lg: "px-3 py-1.5 text-sm rounded-xl", 
  },
  
  rounded: "rounded-full", 
};

export const Badge = forwardRef(({ 
  children, 
  variant = "primary", 
  size = "md", 
  pill = false,
  className = "", 
  ...props 
}, ref) => {
  return (
    <span
      ref={ref}
      className={`
        ${badgeStyles.base}
        ${badgeStyles.variants[variant]}
        ${pill ? "rounded-full" : badgeStyles.sizes[size]}
        ${className}
      `.trim()}
      {...props}
    >
      {children}
    </span>
  );
});

Badge.displayName = "Badge";