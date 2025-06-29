"use client"

import { usePathname } from "next/navigation"
import { ChevronRight, type LucideIcon } from "lucide-react"

// Removed Collapsible imports - no longer needed
import {
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
} from "@/components/ui/sidebar"

// Path mapping array
const pathMapping = [
  { path: "/dashboard", title: "DashBoard" },
  { path: "/organization", title: "Organization" },
  { path: "/user-management", title: "User Management" },
  { path: "/consumption", title: "Consumption" },
  { path: "/consumption/gen-ai", title: "Gen AI", parent: "Consumption" },
  { path: "/consumption/legal-ai", title: "Legal AI", parent: "Consumption" },
  { path: "/document-management", title: "Document Management" },
  { path: "/price-model", title: "Price Model" },
]

export function NavMain({
  items,
}: {
  items: {
    title: string
    url: string
    icon?: LucideIcon
    items?: {
      title: string
      url: string
    }[]
  }[]
}) {
  const pathname = usePathname()

  // Helper function to check if an item is active
  const isItemActive = (title: string, url: string) => {
    const mappedPath = pathMapping.find(item => item.title === title)
    if (mappedPath) {
      return pathname === mappedPath.path
    }
    return pathname === url
  }

  // Helper function to check if a sub-item is active
  const isSubItemActive = (title: string, url: string, parentTitle: string) => {
    const mappedPath = pathMapping.find(item => item.title === title && item.parent === parentTitle)
    if (mappedPath) {
      return pathname === mappedPath.path
    }
    return pathname === url
  }

  // Helper function to check if parent has active sub-item
  const hasActiveSubItem = (parentTitle: string, subItems?: { title: string; url: string }[]) => {
    if (!subItems) return false
    return subItems.some(subItem => isSubItemActive(subItem.title, subItem.url, parentTitle))
  }

  return (
    <SidebarGroup className="pr-0 pl-8 group-data-[collapsible=icon]:pl-2 font-dmsans">
      <SidebarMenu>
        {items.map((item) => {
          const isMainActive = isItemActive(item.title, item.url)
          const hasActiveSub = hasActiveSubItem(item.title, item.items)
          
          return (
            <SidebarMenuItem key={item.title} className="mb-2 font-semibold text-base ">
              <SidebarMenuButton 
                tooltip={item.title} 
                className={`active:bg-white cursor-pointer  hover:!bg-white hover:!text-[#004487] transition-all duration-300 ease-in-out hover:border-r-3 hover:border-[#004487] rounded-none ${
                  isMainActive || hasActiveSub
                    ? 'text-[#004487]  border-r-3 border-[#004487]' 
                    : 'text-[#A3AED0]'
                }`}
              >
                {item.icon && <item.icon />}
                <span>{item.title}</span>
              </SidebarMenuButton>
              
              {item.items && item.items.length > 0 && (
                <SidebarMenuSub className="border-l-0">
                  {item.items?.map((subItem) => {
                    const isSubActive = isSubItemActive(subItem.title, subItem.url, item.title)
                    
                    return (
                      <SidebarMenuSubItem key={subItem.title} className="">
                        <SidebarMenuSubButton 
                          asChild 
                          className={`active:bg-white hover:bg-white transition-all duration-300 ease-in-out ${
                            isSubActive ? '' : ''
                          }`}
                        >
                          <a href={subItem.url}>
                            <span className={
                              isSubActive ? 'text-[#004487]' : 'text-[#A3AED0] hover:!text-[#004487]'
                            }>
                              {subItem.title}
                            </span>
                          </a>
                        </SidebarMenuSubButton>
                      </SidebarMenuSubItem>
                    )
                  })}
                </SidebarMenuSub>
              )}
            </SidebarMenuItem>
          )
        })}
      </SidebarMenu>
    </SidebarGroup>
  )
}



// "use client"

// import { usePathname } from "next/navigation"
// import { ChevronRight, type LucideIcon } from "lucide-react"

// // Removed Collapsible imports - no longer needed
// import {
//   SidebarGroup,
//   SidebarGroupLabel,
//   SidebarMenu,
//   SidebarMenuButton,
//   SidebarMenuItem,
//   SidebarMenuSub,
//   SidebarMenuSubButton,
//   SidebarMenuSubItem,
// } from "@/components/ui/sidebar"

// // Path mapping array
// const pathMapping = [
//   { path: "/dashboard", title: "DashBoard" },
//   { path: "/organization", title: "Organization" },
//   { path: "/user-management", title: "User Management" },
//   { path: "/consumption", title: "Consumption" },
//   { path: "/consumption/gen-ai", title: "Gen AI", parent: "Consumption" },
//   { path: "/consumption/legal-ai", title: "Legal AI", parent: "Consumption" },
//   { path: "/document-management", title: "Document Management" },
//   { path: "/price-model", title: "Price Model" },
// ]

// export function NavMain({
//   items,
// }: {
//   items: {
//     title: string
//     url: string
//     icon?: LucideIcon
//     items?: {
//       title: string
//       url: string
//     }[]
//   }[]
// }) {
//   const pathname = usePathname()

//   // Helper function to check if an item is active
//   const isItemActive = (title: string, url: string) => {
//     const mappedPath = pathMapping.find(item => item.title === title)
//     if (mappedPath) {
//       return pathname === mappedPath.path
//     }
//     return pathname === url
//   }

//   // Helper function to check if a sub-item is active
//   const isSubItemActive = (title: string, url: string, parentTitle: string) => {
//     const mappedPath = pathMapping.find(item => item.title === title && item.parent === parentTitle)
//     if (mappedPath) {
//       return pathname === mappedPath.path
//     }
//     return pathname === url
//   }

//   // Helper function to check if parent has active sub-item
//   const hasActiveSubItem = (parentTitle: string, subItems?: { title: string; url: string }[]) => {
//     if (!subItems) return false
//     return subItems.some(subItem => isSubItemActive(subItem.title, subItem.url, parentTitle))
//   }

//   return (
//     <SidebarGroup className="">
//       <SidebarMenu>
//         {items.map((item) => {
//           const isMainActive = isItemActive(item.title, item.url)
//           const hasActiveSub = hasActiveSubItem(item.title, item.items)
          
//           return (
//             <SidebarMenuItem key={item.title} className="pb-2 font-semibold text-base">
//               <SidebarMenuButton 
//                 tooltip={item.title} 
//                 className={`active:bg-white cursor-pointer hover:!bg-white hover:!text-[#A3AED0] transition-all duration-300 ease-in-out hover:border-r-3 hover:border-[#004487] rounded-none ${
//                   isMainActive || hasActiveSub
//                     ? 'text-blue-600 bg-blue-50 border-r-3 border-[#004487]' 
//                     : 'text-[#A3AED0]'
//                 }`}
//               >
//                 {item.icon && <item.icon />}
//                 <span>{item.title}</span>
//               </SidebarMenuButton>
              
//               {item.items && item.items.length > 0 && (
//                 <SidebarMenuSub className="border-l-0">
//                   {item.items?.map((subItem) => {
//                     const isSubActive = isSubItemActive(subItem.title, subItem.url, item.title)
                    
//                     return (
//                       <SidebarMenuSubItem key={subItem.title} className="">
//                         <SidebarMenuSubButton 
//                           asChild 
//                           className={`active:bg-white hover:bg-white transition-all duration-300 ease-in-out ${
//                             isSubActive ? 'bg-blue-50' : ''
//                           }`}
//                         >
//                           <a href={subItem.url}>
//                             <span className={
//                               isSubActive ? 'text-blue-600' : 'text-[#A3AED0] hover:!text-[#004487]'
//                             }>
//                               {subItem.title}
//                             </span>
//                           </a>
//                         </SidebarMenuSubButton>
//                       </SidebarMenuSubItem>
//                     )
//                   })}
//                 </SidebarMenuSub>
//               )}
//             </SidebarMenuItem>
//           )
//         })}
//       </SidebarMenu>
//     </SidebarGroup>
//   )
// }