"use client";

import React from "react";
import {
  LineChart,
  Line,
  ResponsiveContainer,
  Tooltip,
  XAxis,
} from "recharts";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Calendar,ChartNoAxesColumn,Triangle,CircleCheck } from "lucide-react";

const defaultLineData = [
  { label: "SEP", value: 85 },
  { label: "OCT", value: 150 },
  { label: "NOV", value: 95 },
  { label: "DEC", value: 150 },
  { label: "JAN", value: 60 },
  { label: "FEB", value: 200 },
];

interface LineChartProps {
  data?: { label: string; value: number }[];
  title?: string;
  amount?: string;
  subtitle?: string;
  growth?: string;
  status?: string;
}

export const LineChartItem: React.FC<LineChartProps> = ({
  data = defaultLineData,
  title = "$37.5K",
  amount = "+2.45%",
  subtitle = "Total Spent",
  growth = "On track",
  // status = "success",
}) => {
  // const [isClient, setIsClient] = useState(false);

  // useEffect(() => {
  //   setIsClient(true);
  // }, []);
  return (
    <Card className="w-full h-full shadow-none bg-white border-none rounded-2xl">
      <CardHeader className="pb-2">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className=" rounded-sm bg-[#F4F7FE] ">
            <span className="text-sm font-semibold rounded-3xl flex items-center p-2 gap-2 text-[#A3AED0]"><Calendar size={20}/>This month</span>
            </div>
          </div>
           <div className=" rounded-sm bg-[#F4F7FE] ">
            <span className="text-sm font-semibold rounded-3xl flex items-center p-2 gap-2 text-[#004487]"><ChartNoAxesColumn size={20}/></span>
          </div>
        </div>
      </CardHeader>
      <CardContent className="pb-2">
        <div className="flex">
        <div className="space-y-2 md:w-44">
        <span className="text-3xl font-bold text-[#004487]">{title}</span>
          <div className="flex  gap-2 items-center">
            <span className="text-sm text-[#A3AED0]  font-medium">{subtitle}</span>
            <Triangle fill="#05CD99" className="text-[#05CD99]" size={10}/>
            <span className="text-sm text-[#05CD99] font-medium">{amount}</span>
          </div>
          

          <div className="mt-4">
            <div className="flex  gap-2 items-center">
            <CircleCheck fill="#05CD99" className="text-white" size={20}/>
            
            <span className="text-md text-[#05CD99] font-semibold">{growth}</span>
          </div>
        </div>
        </div>

        <div className="mt-4 w-full h-44">
         
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={data} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                  <XAxis
                    dataKey="label"
                    axisLine={false}
                    tickLine={false}
                    tick={{ fontSize: 12, fill: "#A3AED0" }}
                  />
                  <Tooltip
                    content={({ active, payload }) => {
                      if (active && payload && payload.length) {
                        return (
                          <div className="bg-[#004487] text-white px-2 py-1 rounded text-xs">
                            ${payload[0].value}.00
                          </div>
                        );
                      }
                      return null;
                    }}
                  />
                  <Line
                    type="monotone"
                    dataKey="value"
                    stroke="#009588"
                    strokeWidth={3}
                    dot={false}
                    activeDot={{ r: 4, fill: "#3B82F6" }}
                  />
                </LineChart>
              </ResponsiveContainer>
            
        </div>

        
        </div>
      </CardContent>
    </Card>
  );
};
