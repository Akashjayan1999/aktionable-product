

import React from "react";
import { ReactNode } from "react";
import StatCard from "@/app/(dashboards)/components/stat-card";
import { TableSection } from "./table-section";
import { SegmentedFilter } from "./segment-filter";
export interface StatCardData {
  icon: ReactNode;
  value: string | number;
  title?: string;
  title2?: string;
  subtext?: string;
  growth?: string;
  highlight?: boolean;
}

type OrgTableRow = {
  org: string;
  completionTokens: number;
  cost1: string;
  queryEmbeddingTokens: number;
  cost2: string;
  documentEmbedding: number;
  cost3: string;
};



interface UserManagementSectionProps {
  cards: StatCardData[];
  OrgTableData: OrgTableRow[];
 searchParams?: { [key: string]: string | string[] | undefined };
}

export const GenAiSection = ({
  cards,
  OrgTableData,
  searchParams,
}: UserManagementSectionProps) => {

  const filter = searchParams?.filter as string || "Day";
  return (
    <div>
      <div className="mx-4">
      <SegmentedFilter filter={filter} />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-6 mx-4">
        {cards.map((card, idx) => (
          <StatCard key={idx} {...card} />
        ))}
      </div>
     <div className="max-h-[60vh] overflow-y-auto scrollbar-hide  mt-5  rounded-2xl h-full">
      <TableSection
        OrgTableData={OrgTableData}
      />
      </div>
    </div>
  );
};
