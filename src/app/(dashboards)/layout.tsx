import React from 'react'
import { AppSidebar } from './components/app-sidebar'
import {
  SidebarInset,
  SidebarProvider,
} from "@/components/ui/sidebar"
import Header from './components/header'
export default function layout({children}:{children:React.ReactNode}) {
  return (
     <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <div className='bg-[#F4F7FE] min-h-screen font-dmsans font-normal w-full'>
        
         <Header />
         {children}
        </div>
      </SidebarInset>
    </SidebarProvider>
  )
}


