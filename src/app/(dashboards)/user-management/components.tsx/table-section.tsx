"use client";
import React from "react";
import TableCard from "../../components/table-card";
import { DataTable } from "../../components/data-table";
import { ColumnDef } from "@tanstack/react-table";

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

const fullUserColumns: ColumnDef<FullUserRow>[] = [
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
  { accessorKey: "role", header: "Role" },
  { accessorKey: "scope", header: "Scope" },
  { accessorKey: "bots", header: "LegalAI Bot" },
];

const percentUserColumns: ColumnDef<PercentRow>[] = [
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
];

export function UserTableSection({
  fullUserData,
  percentUserData,
}: {
  fullUserData: FullUserRow[];
  percentUserData: PercentRow[];
}) {
  return (
    <div className="mx-4 pt-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      <div className="lg:col-span-2 h-full">
        <TableCard title="Users: Testadmin">
          <DataTable columns={fullUserColumns} data={fullUserData} className="min-h-64 h-64 max-h-64"/>
        </TableCard>
      </div>
      <div className="lg:col-span-1 h-full">
        <TableCard title="Users: Testadmin">
          <DataTable columns={percentUserColumns} data={percentUserData} className="min-h-64 h-64 max-h-64"/>
        </TableCard>
      </div>
    </div>
  );
}
