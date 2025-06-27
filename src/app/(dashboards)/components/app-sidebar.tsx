"use client"

import * as React from "react"
import {
  Home,
  ChartNoAxesColumn,
  ShoppingCart,
  LayoutDashboard,
  BookOpen,
  User,
  BriefcaseBusiness
} from "lucide-react"

import { NavMain } from "./nav-main"

import { NavUser } from "./nav-user"
import { TeamSwitcher } from "./team-switcher"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar"

// This is sample data.
const data = {
  navMain: [
    {
      title: "DashBoard",
      url: "#",
      icon: Home,
      isActive: true,
     
    },
    {
      title: "Organization",
      url: "#",
      icon: ShoppingCart,
      
    },
    {
      title: "User Management",
      url: "#",
      icon: ChartNoAxesColumn,
      
    },
    {
      title: "Consumption",
      url: "#",
      icon: LayoutDashboard,
      items: [
        {
          title: "Gen AI",
          url: "#",
        },
        {
          title: "Legal AI",
          url: "#",
        }
      ],
    },
    {
      title: "Document Management",
      url: "#",
      icon: User,
      
    },
    {
      title: "Price Model",
      url: "#",
      icon: BriefcaseBusiness,
      
    },
  ]
  
}

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="icon" {...props} className="font-dmsans font-normal sidebar" >
      <SidebarHeader>
        <TeamSwitcher />
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
      </SidebarContent>
      <SidebarFooter>
        <NavUser />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  )
}
