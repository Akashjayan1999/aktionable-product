"use client";

import React from "react";
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from "recharts";
import { Card, CardContent } from "@/components/ui/card";
import { ChevronDown } from "lucide-react";
import { ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";

interface PieDataItem {
  name: string;
  value: number;
}

interface PieChartCardProps {
  data: PieDataItem[];
  colors?: string[];
  title?: string;
  subtitle?: string;
  labels?: string[];
}

const PieChartStatusCard: React.FC<PieChartCardProps> = ({
  data,
  colors=["#004487", "#009588", "#6AD2FF", "#EFF4FB"],
  title = "Projects / Bot Status",
  subtitle = "Monthly",
  labels = [],
}) => {
  return (
    <Card className="w-full h-full shadow-none bg-white border-none rounded-2xl gap-5">
      <CardContent className="pb-2">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-bold text-[#004487]">{title}</h2>
          <button className="text-sm font-semibold text-[#A3AED0] flex items-center gap-1">
            {subtitle} <ChevronDown className="w-4 h-4" fill="#A3AED0" />
          </button>
        </div>

        <div className="h-48">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie data={data} dataKey="value">
                <Tooltip
                  content={({ active, payload }) => {
                    if (active && payload && payload.length) {
                      return (
                        <div className="bg-[#004487] text-white px-2 py-1 rounded text-xs">
                          {payload[0]?.value} {payload[0]?.name}
                        </div>
                      );
                    }
                    return null;
                  }}
                />
                {data.map((_, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={colors[index % colors.length]}
                  />
                ))}
              </Pie>
            </PieChart>
          </ResponsiveContainer>
        </div>

        <div className="mt-6 bg-white rounded-xl shadow-xs flex justify-around py-4 text-sm">
          {data.slice(0, 2).map((item, index) => (
            <div className="text-center" key={index}>
              <div className="flex items-center justify-center gap-2 text-md font-semibold text-[#A3AED0]">
                <div
                  className="w-2 h-2 rounded-full"
                  style={{ backgroundColor: colors[index % colors.length] }}
                />
                {item.name}
              </div>
              <p className="text-xl font-bold text-[#004487]">{item.value}%</p>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default PieChartStatusCard;
