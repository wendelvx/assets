import { useState, useRef, useEffect, forwardRef } from "react";

const dropdownStyles = {
  container: "relative inline-block w-full",
  
  trigger: "flex items-center justify-between h-10 w-full rounded-md border border-neutral-200 bg-white px-3 py-2 text-sm transition-all focus:outline-none focus:ring-2 focus:ring-primary-500/20 focus:border-primary-500 cursor-pointer",
  menu: "absolute z-50 mt-2 min-w-[8rem] overflow-hidden rounded-lg border border-neutral-200 bg-white p-1 text-neutral-900 shadow-elevated animate-in fade-in zoom-in-95 duration-200",
  item: "relative flex cursor-pointer select-none items-center rounded-md px-2 py-1.5 text-sm outline-none transition-colors hover:bg-primary-50 hover:text-primary-600 data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
  label: "text-sm font-medium text-neutral-700 mb-1.5 block",
};

export const Dropdown = ({ label, placeholder = "Selecione...", options = [], onSelect, className = "" }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState(null);
  const containerRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (containerRef.current && !containerRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleSelect = (option) => {
    setSelected(option);
    setIsOpen(false);
    if (onSelect) onSelect(option);
  };

  return (
    <div className={`${dropdownStyles.container} ${className}`} ref={containerRef}>
      {label && <label className={dropdownStyles.label}>{label}</label>}
      
      <div 
        className={dropdownStyles.trigger} 
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className={selected ? "text-neutral-900" : "text-neutral-500"}>
          {selected ? selected.label : placeholder}
        </span>
       
        <svg 
          className={`h-4 w-4 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`} 
          fill="none" viewBox="0 0 24 24" stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </div>

      {isOpen && (
        <div className={dropdownStyles.menu} style={{ width: '100%' }}>
          {options.map((option) => (
            <div
              key={option.value}
              className={dropdownStyles.item}
              onClick={() => handleSelect(option)}
            >
              {option.label}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};