"use client";
import React from "react";
import TableCard from "../../components/table-card";
import { DataTable } from "../../components/data-table";
import { ColumnDef } from "@tanstack/react-table";


type OrgRow = {
  org: string;
  users: string;
  genAiBots: number;
  LegalAiBots: string;
};



const OrgColumns: ColumnDef<OrgRow>[] = [
  {
    accessorKey: "org",
    header: "Organizations Name",
    cell: ({ row }) => (
      <div className="flex items-center space-x-2">
        <div className="w-4 h-4 rounded-full bg-[#2D6EAF] flex items-center justify-center text-white font-normal text-[8px]">
            {row?.original?.org?.charAt(0)||"T"}
        </div>
        <span className="text-[#004487] font-semibold">{row.original.org}</span>
      </div>
    ),
  },
  { accessorKey: "users", header: "Users" },
  { accessorKey: "genAiBots", header: "GenAI Bots" },
  { accessorKey: "LegalAiBots", header: "LegalAI Bots" },
];



export function TableSection({
  OrgData,
}: {
  OrgData: OrgRow[];
}) {
  return (
    <div className="h-full">
      
        <TableCard title="Orginations Info">
          <DataTable columns={OrgColumns} data={OrgData} className="min-h-64 max-h-64"/>
        </TableCard>
     
    </div>
  );
}