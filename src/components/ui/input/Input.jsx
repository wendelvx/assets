import { forwardRef } from "react";

const inputStyles = {
  base: "flex h-10 w-full rounded-md border border-neutral-200 bg-white px-3 py-2 text-sm transition-all file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-neutral-500 focus:outline-none focus:ring-2 focus:ring-primary-500/20 focus:border-primary-500 disabled:cursor-not-allowed disabled:opacity-50",
  error: "border-red-500 focus:ring-red-500/20 focus:border-red-500",
  label: "text-sm font-medium text-neutral-700 mb-1.5 block",
  errorText: "text-xs text-red-500 mt-1.5",
};

export const Input = forwardRef(({ label, error, className = "", id, ...props }, ref) => {
  return (
    <div className="w-full">
      {label && (
        <label htmlFor={id} className={inputStyles.label}>
          {label}
        </label>
      )}
      
      <input
        id={id}
        ref={ref}
        className={`
          ${inputStyles.base} 
          ${error ? inputStyles.error : ""} 
          ${className}
        `.trim()}
        {...props}
      />

      {error && (
        <p className={inputStyles.errorText}>
          {error}
        </p>
      )}
    </div>
  );
});

Input.displayName = "Input";