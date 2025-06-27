"use client"

import * as React from "react"
import Image from "next/image"
import {
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"
import { Separator } from "@/components/ui/separator"

export function TeamSwitcher() {
  
  return (
    <SidebarMenu>
      <SidebarMenuItem>
        <SidebarMenuButton
          size="lg"
          className="cursor-default py-15 pb-10 active:bg-white hover:bg-white"
        >
          <div className="text-sidebar-primary-foreground flex gap-6 flex-col w-full my-8  items-center justify-center ">
             <Image 
          src="/logo.svg" 
          alt="Logo" 
          className="group-data-[collapsible=icon]:hidden transition-opacity duration-200" 
          width={150} 
          height={150} 
        />
        <Image 
          src="/logo-icon.svg" 
          alt="Logo Icon" 
          className="hidden group-data-[collapsible=icon]:block mt-5 transition-opacity duration-100" 
          width={20} 
          height={20} 
        /><Separator color="#F4F7FE" className="py-[1px]"/>
          </div>
         
         
        </SidebarMenuButton>
      </SidebarMenuItem>
    </SidebarMenu>
  )
}