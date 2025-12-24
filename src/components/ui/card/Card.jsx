const cardStyles = {
  container: "bg-white border border-neutral-200 rounded-xl shadow-soft overflow-hidden w-full transition-all",
  header: "p-6 border-b border-neutral-100",
  title: "text-xl font-semibold text-neutral-900 leading-none tracking-tight",
  description: "text-sm text-neutral-500 mt-1.5",
  content: "p-6",
  footer: "p-6 border-t border-neutral-100 flex items-center",
};

export const Card = ({ children, className = "" }) => (
  <div className={`${cardStyles.container} ${className}`}>{children}</div>
);

export const CardHeader = ({ children, className = "" }) => (
  <div className={`${cardStyles.header} ${className}`}>{children}</div>
);

export const CardTitle = ({ children, className = "" }) => (
  <h3 className={`${cardStyles.title} ${className}`}>{children}</h3>
);

export const CardDescription = ({ children, className = "" }) => (
  <p className={`${cardStyles.description} ${className}`}>{children}</p>
);

export const CardContent = ({ children, className = "" }) => (
  <div className={`${cardStyles.content} ${className}`}>{children}</div>
);

export const CardFooter = ({ children, className = "" }) => (
  <div className={`${cardStyles.footer} ${className}`}>{children}</div>
);