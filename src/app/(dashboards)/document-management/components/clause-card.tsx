"use client";

import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Pencil, Trash2 } from "lucide-react";

export interface Clause {
  title: string;
  definition: string;
  defaultInput: string;
  userInputRequired: boolean;
  implementationInstructions: string;
}

interface ClauseCardProps {
  clause: Clause;
  index: number;
}

export function ClauseCard({ clause, index }: ClauseCardProps) {
  return (
    <Card className=" px-6 bg-white rounded-2xl shadow-none w-full border-none">
      <div className="flex justify-between items-center">
        <p className="font-semibold text-base">
          {index + 1}. {clause.title}
        </p>
        <div className="flex">
          <Button variant="ghost" size="icon">
            <Pencil className="w-4 h-4" />
          </Button>
          <Button variant="ghost" size="icon">
            <Trash2 className="w-4 h-4" />
          </Button>
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-[2fr_1fr_1fr] divide-y lg:divide-y-0 lg:divide-x text-[#424242] border-gray-200 pt-0 text-sm">
       
        <div className="px-4 pl-0 break-words min-w-0 pb-2 lg:pb-0">
          <p className=" mb-1">Definition</p>
          <p>{clause.definition}</p>
        </div>

        <div className="pl-0  lg:px-4 break-words min-w-0 py-2 lg:py-0">
          <p className=" mb-1">Default User Input</p>
          <p>{clause.defaultInput}</p>
        </div>

     
        <div className="pl-0  lg:px-4 break-words min-w-0 py-2 lg:py-0">
          <p className=" mb-1">User Input Required</p>
          <p>{clause.userInputRequired ? "Yes" : "No"}</p>
        </div>
      </div>

      <hr />
      <div className="text-[#424242]">
        <p className="text-sm ">
          Implementation Instructions
        </p>
        <p className="text-sm">{clause.implementationInstructions}</p>
      </div>
    </Card>
  );
}
