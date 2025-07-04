import { ReactNode } from "react";
import { Card, CardContent } from "@/components/ui/card";

type StatCardProps = {
  icon: ReactNode|null;
  value: string | number;
  title?: string;
  title2?: string;
  subtext?: string;
  growth?: string;
  highlight?: boolean;
  percentage?: string;
  pertText?: string;
};

export default function StatCard({
  icon,
  value,
  title,
  title2,
  subtext,
  growth,
  percentage,
  pertText,
  // highlight = false,
  

}: StatCardProps) {
  
  return (
    <Card className="bg-white rounded-2xl shadow-none w-full border-none ">
      <CardContent className="flex items-center space-x-3 py-0">
        {icon && <div className="bg-[#F4F7FE] rounded-full p-4 shadow-none">{icon}</div>}
        <div>
          {title && <p className="text-sm font-medium text-[#A3AED0]">{title}</p>}
          <h2 className="text-2xl font-bold text-[#004487]">{value}</h2>
          {growth && (
            <p className="text-xs text-green-600 font-medium">{growth}</p>
          )}
          {title2 && (
            <p className="text-2xl font-bold text-[#004487]">{title2}</p>
          )}
          {subtext && (
            <p className="text-sm font-medium text-[#A3AED0]">{subtext}</p>
          )}
          
          {(percentage || pertText) && (
          <div className="flex gap-3">
               {percentage && <p className="text-[13px] font-semibold text-[#05CD99]">{percentage}</p>}
              {pertText && <p className="text-[13px] font-semibold text-[#A3AED0]">{pertText}</p>}
          </div>)}
        </div>
      </CardContent>
    </Card>
  );
}
