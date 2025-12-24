import { LogOut, Home, Settings, Users, BarChart3, Layers } from "lucide-react";

const sidebarStyles = {
  container: "fixed inset-y-0 left-0 z-40 w-64 bg-white border-r border-neutral-200 flex flex-col transition-all duration-300",
  logoSection: "h-20 flex items-center px-6 border-b border-neutral-100",
  navSection: "flex-1 overflow-y-auto py-6 px-4 space-y-1.5",
  footerSection: "p-4 border-t border-neutral-100",
  item: "flex items-center gap-3 px-4 py-3 rounded-md text-sm font-medium transition-all duration-200 group",
  active: "bg-primary-50 text-primary-600 shadow-sm",
  inactive: "text-neutral-500 hover:bg-neutral-50 hover:text-neutral-900",
  icon: "w-5 h-5",
  activeIcon: "text-primary-500",
  inactiveIcon: "text-neutral-400 group-hover:text-neutral-600"
};

export const Sidebar = ({ children }) => (
  <aside className={sidebarStyles.container}>
    {children}
  </aside>
);

export const SidebarLogo = ({ icon: Icon, label }) => (
  <div className={sidebarStyles.logoSection}>
    <div className="flex items-center gap-2">
      <div className="p-2 bg-primary-500 rounded-lg shadow-elevated">
        <Icon className="w-6 h-6 text-white" />
      </div>
      <span className="text-xl font-bold text-neutral-900 tracking-tight">{label}</span>
    </div>
  </div>
);

export const SidebarItem = ({ icon: Icon, label, active = false, onClick }) => (
  <button 
    onClick={onClick}
    className={`
      ${sidebarStyles.item} 
      ${active ? sidebarStyles.active : sidebarStyles.inactive}
    `.trim()}
  >
    <Icon className={`
      ${sidebarStyles.icon} 
      ${active ? sidebarStyles.activeIcon : sidebarStyles.inactiveIcon}
    `} />
    {label}
  </button>
);

export const SidebarFooter = ({ children }) => (
  <div className={sidebarStyles.footerSection}>
    {children}
  </div>
);