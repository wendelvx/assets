import { CheckCircle2, X } from "lucide-react";

const toastStyles = {
  container: "fixed bottom-5 right-5 z-[100] flex flex-col gap-2 pointer-events-none",
  item: "pointer-events-auto flex items-center gap-3 bg-neutral-900 text-white px-4 py-3 rounded-lg shadow-elevated animate-in slide-in-from-right-10 duration-300",
};

export const Toast = ({ message, isOpen, onClose }) => {
  if (!isOpen) return null;

  setTimeout(() => onClose(), 3000);

  return (
    <div className={toastStyles.container}>
      <div className={toastStyles.item}>
        <CheckCircle2 className="w-5 h-5 text-primary-400" />
        <span className="text-sm font-medium">{message}</span>
        <button onClick={onClose} className="ml-2 p-1 hover:bg-white/10 rounded-full transition-colors">
          <X size={14} />
        </button>
      </div>
    </div>
  );
};