import React from "react";
import { ReactNode } from "react";
import StatCard from "../../components/stat-card";
import { TableSection } from "./table-section";
import { LineChartItem } from "./line-chart";
import BarChartItem from "./bar-chart";
import PieChartItem from "./pie-chart";
export interface StatCardData {
  icon: ReactNode | null;
  value: string | number;
  title?: string;
  title2?: string;
  subtext?: string;
  growth?: string;
  highlight?: boolean;
  percentage?: string;
  pertText?: string;
}

type OrgRow = {
  org: string;
  users: string;
  genAiBots: number;
  LegalAiBots: string;
};
interface PieDataItem {
  name: string;
  value: number;
}
type ChartData = { label: string; value: number };

interface OrganizationSectionProps {
  cards: StatCardData[];
  OrgData: OrgRow[];
  LinechartData: ChartData[];
  barChartData: ChartData[];
  pieChartData: PieDataItem[];
}

export const OrganizationSection = ({
  cards,
  OrgData,
  LinechartData,
  barChartData,
  pieChartData,
}: OrganizationSectionProps) => {
  return (
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-4 mt-6 mx-4">
        {cards.map((card, idx) => (
          <StatCard key={idx} {...card} />
        ))}
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mt-4 mx-4">
        <div className="md:col-span-2 h-full">
          <LineChartItem data={LinechartData} />
        </div>
        <div className="md:col-span-1 h-full">
          <BarChartItem data={barChartData}/>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mt-4 mx-4 ">
        <div className="md:col-span-2 h-full">
          <TableSection OrgData={OrgData} />
        </div>
        <div className="md:col-span-1 h-full ">
          <PieChartItem data={pieChartData} colors={["#004487", "#009588", "#05CD99", "#A3AED0"]}/>
        </div>
      </div>

     
    </div>
  );
};
