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
      url: "/dashboard",
      icon: Home,
      isActive: true,
     
    },
    {
      title: "Organization",
      url: "/organization",
      icon: ShoppingCart,
      
    },
    {
      title: "User Management",
      url: "/user-management",
      icon: ChartNoAxesColumn,
      
    },
    {
      title: "Consumption",
      url: "/consumption",
      icon: LayoutDashboard,
      items: [
        {
          title: "Gen AI",
          url: "/consumption/gen-ai",
        },
        {
          title: "Legal AI",
          url: "/consumption/legal-ai",
        }
      ],
    },
    {
      title: "Document Management",
      url: "/document-management",
      icon: User,
      
    },
    {
      title: "Price Model",
      url: "/price-model",
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
