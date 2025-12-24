import { AlertCircle, CheckCircle2, Info, TriangleAlert, X } from "lucide-react";

const alertStyles = {
  base: "relative w-full rounded-lg border p-4 flex gap-3 transition-all",
  variants: {
    info: "bg-blue-50 border-blue-200 text-blue-800",
    success: "bg-emerald-50 border-emerald-200 text-emerald-800",
    warning: "bg-amber-50 border-amber-200 text-amber-800",
    error: "bg-red-50 border-red-200 text-red-800",
  },
  icon: {
    info: <Info className="w-5 h-5 text-blue-500" />,
    success: <CheckCircle2 className="w-5 h-5 text-emerald-500" />,
    warning: <TriangleAlert className="w-5 h-5 text-amber-500" />,
    error: <AlertCircle className="w-5 h-5 text-red-500" />,
  }
};

export const Alert = ({ variant = "info", title, children, onClose }) => (
  <div className={`${alertStyles.base} ${alertStyles.variants[variant]}`}>
    <div className="mt-0.5">{alertStyles.icon[variant]}</div>
    <div className="flex-1">
      {title && <h5 className="font-semibold leading-none tracking-tight mb-1">{title}</h5>}
      <div className="text-sm opacity-90">{children}</div>
    </div>
    {onClose && (
      <button onClick={onClose} className="opacity-70 hover:opacity-100 transition-opacity">
        <X size={18} />
      </button>
    )}
  </div>
);