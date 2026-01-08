import { useState, createContext, useContext } from "react";

const TabsContext = createContext();

const tabsStyles = {
  list: "flex items-center border-b border-neutral-200 mb-6",
  trigger: "relative px-4 py-2 text-sm font-medium transition-all cursor-pointer outline-none hover:text-neutral-900",
  active: "text-primary-600 after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-primary-500 after:rounded-full",
  inactive: "text-neutral-500",
  content: "mt-2 animate-in fade-in duration-300",
};

export const Tabs = ({ defaultValue, children, className = "" }) => {
  const [activeTab, setActiveTab] = useState(defaultValue);

  return (
    <TabsContext.Provider value={{ activeTab, setActiveTab }}>
      <div className={`w-full ${className}`}>{children}</div>
    </TabsContext.Provider>
  );
};

export const TabsList = ({ children }) => (
  <div className={tabsStyles.list}>{children}</div>
);

export const TabsTrigger = ({ value, children }) => {
  const { activeTab, setActiveTab } = useContext(TabsContext);
  const isActive = activeTab === value;

  return (
    <button
      onClick={() => setActiveTab(value)}
      className={`
        ${tabsStyles.trigger} 
        ${isActive ? tabsStyles.active : tabsStyles.inactive}
      `.trim()}
    >
      {children}
    </button>
  );
};

export const TabsContent = ({ value, children }) => {
  const { activeTab } = useContext(TabsContext);
  if (activeTab !== value) return null;

  return <div className={tabsStyles.content}>{children}</div>;
};