"use client";
import React from "react";
import TableCard from "@/app/(dashboards)/components/table-card";
import { DataTable } from "@/app/(dashboards)/components/data-table";
import { ColumnDef } from "@tanstack/react-table";

type OrgTableRow = {
  org: string;
  completionTokens: number;
  cost1: string;
  queryEmbeddingTokens: number;
  cost2: string;
  documentEmbedding: number;
  cost3: string;
};



const OrgTableColumns: ColumnDef<OrgTableRow>[] = [
  {
    accessorKey: "org",
    header: "Organizations Name",
    cell: ({ row }) => (
      <div className="flex items-center space-x-2 text-center">
        <div className="w-4 h-4 rounded-full bg-[#2D6EAF] flex items-center justify-center text-white font-normal text-[8px]">
            {row?.original?.org?.charAt(0)||"T"}
        </div>
        <span className="text-[#004487] font-semibold">{row.original.org}</span>
      </div>
    ),
  },
  { accessorKey: "completionTokens", header: "Completion Tokens" },
  { accessorKey: "cost1", header: "Cost" },
  { accessorKey: "queryEmbeddingTokens", header: "Query Embedding Tokens" },
  { accessorKey: "cost2", header: "Cost" },
  { accessorKey: "documentEmbedding", header: "Document Embedding" },
  { accessorKey: "cost3", header: "Cost", },
];



export function TableSection({
  OrgTableData,
}: {
  OrgTableData: OrgTableRow[];
}) {
  return (
    <div className="mx-4  grid grid-cols-1  gap-4">
      <div className="">
        <TableCard title="Origanizations Info">
          <DataTable columns={OrgTableColumns} data={OrgTableData} className="min-h-64 max-h-64"/>
        </TableCard>
      </div>
      <div className="">
        <TableCard title="Origanizations Wise Info: Test">
          <DataTable columns={OrgTableColumns} data={OrgTableData} className="min-h-64 max-h-64"/>
        </TableCard>
      </div>
      <div className="">
        <TableCard title="User Wise Info: Admin">
          <DataTable columns={OrgTableColumns} data={OrgTableData} className="min-h-64 max-h-64"/>
        </TableCard>
      </div>
    </div>
  );
}
