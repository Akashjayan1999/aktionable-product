'use client'

import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Bell } from "lucide-react"
import Image from "next/image"

export default function Navbar() {
  return (
    <nav className=" fixed  rounded-[50px] left-5 right-5 md:right-12 md:left-12 top-6 min-h-18  z-2 bg-white shadow-sm py-3 px-6 flex justify-between items-center">
      {/* Logo */}
      <div className="flex items-center gap-2">
        <Image src="/logo.svg" alt="Aktionable AI" width={180} height={60}/>
        
      </div>

      {/* Right Side */}
      <div className="flex items-center gap-4 md:gap-6">
        {/* Notification Icon */}
       <Image src="/bell.svg" alt="bell" width={18} height={18}/>

        {/* User Avatar & Dropdown */}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Avatar className="cursor-pointer h-8 w-8">
              <AvatarImage src="/avatar.svg" alt="@user" />
              <AvatarFallback>SA</AvatarFallback>
            </Avatar>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-44 mt-6 rounded-2xl">
            <DropdownMenuLabel className="text-base font-semibold font-quicksand">Super Admin</DropdownMenuLabel>
            <DropdownMenuItem className="text-sm font-medium font-quicksand">My Profile</DropdownMenuItem>
            <DropdownMenuItem className="text-sm font-medium font-quicksand">Dashboard</DropdownMenuItem>
            <DropdownMenuItem className="text-sm font-medium font-quicksand">Settings</DropdownMenuItem>
            <DropdownMenuItem className="text-sm font-medium font-quicksand">Logout</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </nav>
  )
}
