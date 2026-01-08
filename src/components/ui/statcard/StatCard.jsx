import { Card, CardContent } from "../card";
import { Badge } from "../badge";
import { TrendingUp, TrendingDown } from "lucide-react";

const statStyles = {
  title: "text-xs font-semibold uppercase tracking-wider text-neutral-500",
  value: "text-2xl font-bold text-neutral-900 mt-1",
  iconContainer: "p-2 rounded-lg bg-primary-50 text-primary-600",
  trend: "flex items-center gap-1 text-xs font-medium mt-3"
};

export const StatCard = ({ title, value, trend, trendValue, icon: Icon, description }) => {
  const isPositive = trend === "up";

  return (
    <Card className="overflow-hidden border-none shadow-soft hover:shadow-elevated transition-all duration-500">
      <CardContent className="p-6">
        <div className="flex items-start justify-between">
          <div>
            <p className={statStyles.title}>{title}</p>
            <h3 className={statStyles.value}>{value}</h3>
          </div>
          {Icon && (
            <div className={statStyles.iconContainer}>
              <Icon size={20} />
            </div>
          )}
        </div>

        <div className="flex items-center justify-between mt-4">
          <div className={`
            ${statStyles.trend} 
            ${isPositive ? "text-emerald-600" : "text-red-600"}
          `}>
            {isPositive ? <TrendingUp size={14} /> : <TrendingDown size={14} />}
            <span>{trendValue}%</span>
            <span className="text-neutral-400 font-normal ml-1">vs mês anterior</span>
          </div>
          
          {description && (
            <span className="text-[10px] text-neutral-400 mt-4 block italic">
              {description}
            </span>
          )}
        </div>
      </CardContent>
    </Card>
  );
};