"use client";

import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { TableHTMLAttributes } from "react";

interface DataTableProps<TData> extends TableHTMLAttributes<HTMLTableElement> {
  columns: ColumnDef<TData, any>[];
  data: TData[];
}

export function DataTable<TData>({
  columns,
  data,
  className,
  ...rest
}: DataTableProps<TData>) {
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <div className="overflow-x-auto ">
      <table className={`w-full text-sm min-w-max ${className} `} {...rest}>
        <thead className="text-muted-foreground">
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map((header, index) => (
                <th
                  key={header.id}
                  className={`pb-3 pr-2 font-semibold text-[#A3AED0] ${
                    index === 0 ? "text-start " : "text-center"
                  }`}
                >
                  {header.isPlaceholder
                    ? null
                    : flexRender(
                        header.column.columnDef.header,
                        header.getContext()
                      )}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody>
          {table.getRowModel().rows.map((row) => (
            <tr key={row.id} className="text-[#004487] font-semibold">
              {row.getVisibleCells().map((cell) => (
                <td key={cell.id} className="py-2 pr-2 text-center">
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
