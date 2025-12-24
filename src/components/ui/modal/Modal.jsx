import { X } from "lucide-react"; 
import { useEffect } from "react";

const modalStyles = {
  overlay: "fixed inset-0 z-50 bg-neutral-900/50 backdrop-blur-sm flex items-center justify-center p-4 animate-in fade-in duration-200",
  content: "bg-white w-full max-w-lg rounded-xl shadow-elevated relative animate-in zoom-in-95 duration-200",
  header: "p-6 border-b border-neutral-100 flex items-center justify-between",
  title: "text-xl font-semibold text-neutral-900",
  body: "p-6",
  footer: "p-6 border-t border-neutral-100 bg-neutral-50/50 flex justify-end gap-3 rounded-b-xl",
  closeBtn: "text-neutral-400 hover:text-neutral-600 transition-colors p-1 rounded-full hover:bg-neutral-100"
};

export const Modal = ({ isOpen, onClose, children }) => {
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className={modalStyles.overlay} onClick={onClose}>
      <div 
        className={modalStyles.content} 
        onClick={(e) => e.stopPropagation()} 
      >
        {children}
      </div>
    </div>
  );
};

export const ModalHeader = ({ title, onClose }) => (
  <div className={modalStyles.header}>
    <h3 className={modalStyles.title}>{title}</h3>
    {onClose && (
      <button onClick={onClose} className={modalStyles.closeBtn}>
        <X size={20} />
      </button>
    )}
  </div>
);

export const ModalBody = ({ children }) => (
  <div className={modalStyles.body}>{children}</div>
);

export const ModalFooter = ({ children }) => (
  <div className={modalStyles.footer}>{children}</div>
);