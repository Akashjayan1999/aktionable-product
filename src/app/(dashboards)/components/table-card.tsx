"use client";
import { Card, CardContent } from "@/components/ui/card";
import { MoreHorizontal } from "lucide-react";
import { ReactNode } from "react";

type TableCardProps = {
  title: string;
  children: ReactNode;
};

export default function TableCard({ title, children }: TableCardProps) {
  return (
    <Card className="bg-white rounded-2xl shadow-none border-none w-full h-full">
      <CardContent className="p-0 px-6">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-bold text-[#1f2937]">{title}</h2>
          <div className="bg-[#F4F7FE] p-2 rounded-lg cursor-pointer none">
            <MoreHorizontal className="w-4 h-4  text-[#004487]" size={20} />
          </div>
        </div>
        {children}
      </CardContent>
    </Card>
  );
}
