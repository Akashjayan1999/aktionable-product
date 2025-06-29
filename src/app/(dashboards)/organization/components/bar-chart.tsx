"use client";

import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  Tooltip,
  ResponsiveContainer,
  Rectangle,
} from "recharts";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Triangle } from "lucide-react";

interface BarChartProps {
  data: { label: string; value: number }[];
  title?: string;
  subtitle?: string;
  growth?: string;
  barSize?: number;
  gradientId?: string;
  gradientStops?: { offset: string; color: string }[];
}

const BarChartItem: React.FC<BarChartProps> = ({
  data,
  title = "2.579",
  subtitle = "Visitors",
  growth = "+2.45%",
  barSize = 20,
  gradientId = "trafficGradient",
  gradientStops = [
    { offset: "0%", color: "#004487" },
    { offset: "100%", color: "#009588" },
  ],
}) => {
  return (
    <Card className="w-full h-full shadow-none bg-white border-none rounded-2xl gap-5">
      
      
      <CardHeader className="pb-2 ">
        <div className="flex justify-between">
          <div>
            <p className="text-sm text-[#A3AED0] font-semibold">Daily Traffic</p>
            <h2 className="text-3xl font-bold text-[#004487]">
              {title} <span className="text-[#A3AED0] text-base font-semibold">{subtitle}</span>
            </h2>
          </div>
          <div className="flex gap-1">
          <Triangle fill="#05CD99" className="text-[#05CD99] mt-1" size={10}/><p className="text-emerald-500 font-medium text-sm">{growth}</p>
         </div>
        </div>
      </CardHeader>
      <svg style={{ height: 0 }} >
        <defs>
          <linearGradient id={gradientId} x1="0" y1="0" x2="0" y2="1">
            {gradientStops.map((stop, i) => (
              <stop
                key={i}
                offset={stop.offset}
                stopColor={stop.color}
              />
            ))}
          </linearGradient>
        </defs>
      </svg>
      <CardContent className="pb-2">
        

        <div className="h-40 ">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={data}>
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
                        {payload[0].value} visitors
                      </div>
                    );
                  }
                  return null;
                }}
              />
              <Bar
                dataKey="value"
                fill={`url(#${gradientId})`}
                radius={[10, 10, 0, 0]}
                barSize={barSize}
              />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
};

export default BarChartItem;
