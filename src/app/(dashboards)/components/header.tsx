"use client";
import { Input } from "@/components/ui/input";
import { Bell, Info, Moon } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { Search } from "lucide-react";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { UserAvatarMenu } from "@/components/avatar";
const pathMapping = [
  { path: "/dashboard", title: "DashBoard" },
  { path: "/organization", title: "Organization" },
  { path: "/user-management", title: "User Management" },
  { path: "/consumption", title: "Consumption" },
  { path: "/consumption/gen-ai", title: "Gen AI", parent: "Consumption" },
  { path: "/consumption/legal-ai", title: "Legal AI", parent: "Consumption" },
  { path: "/document-management", title: "Document Management" },
  { path: "/price-model", title: "Price Model" },
];
export default function Header() {
  const pathname = usePathname();
  const current = pathMapping.find((item) => item.path === pathname);

  return (
    <div className=" py-4 rounded-lg">
      <div>
        <SidebarTrigger className=" -mt-5 hover:!bg-[#F4F7FE] text-[#004487] hover:text-[#004487] cursor-pointer" />
      </div>
      <div className="flex flex-col lg:flex-row lg:items-center justify-between  px-6">
        <div className="order-2 lg:order-1 mt-5 lg:mt-0 text-[#004487]">
          <p className="text-sm font-medium">Pages / Dashboard</p>
          <h1 className="text-3xl font-bold">
            {current ? current.title : "Page"}
          </h1>
        </div>

        <div className="flex items-center space-x-4 justify-between bg-white rounded-full px-4 py-2  order-1 lg:order-2 w-full lg:w-fit">
          <div className="relative">
            <Input
              placeholder="Search"
              className="pl-8 pr-4 py-1 bg-[#f4F7FE] placeholder:text-[#8F9BBA] text-sm w-38 sm:w-52 shadow-none border-none rounded-full focus-visible:ring-0 focus-visible:ring-offset-0"
            />
            <span className="absolute left-2 top-2.5 text-muted-foreground text-sm">
              <Search size={15} />
            </span>
          </div>
          <div className="flex items-center space-x-4">
            <Image src="/bell2.svg" alt="Logo" width={20} height={20} />
            <Image src="/moon.svg" alt="Logo" width={17} height={17} />
            <Image src="/info.svg" alt="Logo" width={18} height={18} />

            <UserAvatarMenu
              src="/avatar2.svg"
              alt="@user"
              fallback="AJ"
              name="Super Admin"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
