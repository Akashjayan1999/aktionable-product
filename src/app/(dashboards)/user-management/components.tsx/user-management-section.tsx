

import React from "react";
import { ReactNode } from "react";
import StatCard from "../../components/stat-card";
import { UserTableSection } from "./table-section";
export interface StatCardData {
  icon: ReactNode;
  value: string | number;
  title?: string;
  title2?: string;
  subtext?: string;
  growth?: string;
  highlight?: boolean;
}

type FullUserRow = {
  org: string;
  role: string;
  scope: string;
  bots: number;
};

type PercentRow = {
  org: string;
  users: string;
};



interface UserManagementSectionProps {
  cards: StatCardData[];
  fullUserData: FullUserRow[];
  percentUserData: PercentRow[];
}

export const UserManagementSection = ({
  cards,
  fullUserData,
  percentUserData,
}: UserManagementSectionProps) => {
  return (
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-6 mx-4">
        {cards.map((card, idx) => (
          <StatCard key={idx} {...card} />
        ))}
      </div>

      <UserTableSection
        fullUserData={fullUserData}
        percentUserData={percentUserData}
      />
    </div>
  );
};
