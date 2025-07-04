"use client"
import { Button } from "@/components/ui/button"
import {
  SidebarMenu,
  SidebarMenuItem,
} from "@/components/ui/sidebar"
import { Home } from "lucide-react"
import Link from "next/link"
export function NavUser() {
  return (
    <SidebarMenu>
      <SidebarMenuItem>
        <Link href="/home">
           <Button
            className="text-base cursor-pointer w-full py-5 font-norml font-varela-round dark:bg-gradient-to-r dark:from-[#fff] dark:to-[#fff] bg-gradient-to-r from-[#009588] to-[#004487] dark:text-black"
            >
            <span className="group-data-[collapsible=icon]:hidden">Home</span>
            <span className="hidden group-data-[collapsible=icon]:block"><Home/></span>
          </Button>
     </Link>
      </SidebarMenuItem>
    </SidebarMenu>
  )
}