import { forwardRef } from "react";

const tableStyles = {
  container: "w-full overflow-hidden rounded-xl border border-neutral-200 bg-white shadow-sm",
  table: "w-full text-left text-sm border-collapse",
  thead: "bg-neutral-50/50 border-b border-neutral-200",
  th: "px-4 py-3 font-semibold text-neutral-600 uppercase tracking-wider text-[11px]",
  tr: "border-b border-neutral-100 last:border-0 transition-colors hover:bg-neutral-50/50",
  td: "px-4 py-4 text-neutral-700 align-middle",
};

export const Table = forwardRef(({ children, className = "" }, ref) => (
  <div className={`${tableStyles.container} ${className}`}>
    <table ref={ref} className={tableStyles.table}>
      {children}
    </table>
  </div>
));

export const THead = ({ children }) => <thead className={tableStyles.thead}>{children}</thead>;
export const TBody = ({ children }) => <tbody className="divide-y divide-neutral-100">{children}</tbody>;
export const TR = ({ children, className = "" }) => <tr className={`${tableStyles.tr} ${className}`}>{children}</tr>;
export const TH = ({ children, className = "" }) => <th className={`${tableStyles.th} ${className}`}>{children}</th>;
export const TD = ({ children, className = "" }) => <td className={`${tableStyles.td} ${className}`}>{children}</td>;

Table.displayName = "Table";