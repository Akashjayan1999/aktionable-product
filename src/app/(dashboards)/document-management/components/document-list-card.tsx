"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Pencil, Trash2, Plus } from "lucide-react"

interface DocumentListCardProps {
  title: string
  subtitle: string
  items: string[]
  showActions?: boolean
  showAddButton?: boolean
}

export function DocumentListCard({
  title,
  subtitle,
  items,
  
}: DocumentListCardProps) {
  return (
    <Card className="bg-white rounded-2xl shadow-none w-full border-none ">
      <CardContent className="p-0">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold px-6 ">{title}</h2>
         
            
              <Plus className="w-7 h-7 text-[#004487] mr-6" />
            
          
        </div>
        <div className="bg-[#004487] text-white px-6 py-2 font-medium ">
          {subtitle}
          <span className="float-right">{items.length.toString().padStart(2, "0")}</span>
        </div>
        <ul className="relative h-48 overflow-y-scroll scrollbar-hide">
          {items.map((item, i) => (
            <li
              key={i}
              className="group flex items-center text-base justify-between pl-6 py-2 hover:bg-[rgba(0,68,135,0.08)] "
            >
              <span>{i + 1}. {item}</span>
             
                <><div className="flex pr-3 absolute -right-1  opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                  <Button variant="ghost" size="sm">
                    <Pencil className="w-3 h-2" />
                  </Button>
                  <Button variant="ghost" size="sm">
                    <Trash2 className="w-3 h-4" />
                  </Button>
                </div></>
              
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  )
}