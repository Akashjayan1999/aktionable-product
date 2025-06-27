"use client";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { Menu, ChevronDown } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { UserAvatarMenu } from "@/components/avatar";
interface NavigationItem {
  title: string;
  href: string;
  children?: NavigationItem[];
}

interface NavigationConfig {
  routeMatchers: string[];
  items: NavigationItem[];
}

interface NavigationConfigMap {
  [key: string]: NavigationConfig;
}

interface NavigationMenuComponentProps {
  currentNav: {
    key: string;
    config: NavigationConfig;
  } | null;
  className?: string;
}

const navigationConfig: NavigationConfigMap = {
  contrakt: {
    routeMatchers: ["/contraktai"],
    items: [
      {
        title: "Contrakt AI",
        href: "/contraktai",
        children: [
          { title: "Created Projects", href: "/contraktai/projects" }
        ],
      },
      {
        title: "AI Document Creator",
        href: "/contraktai/ai-document-creator",
        children: [
          {
            title: "Created Documents",
            href: "/contraktai/ai-document-creator/created-documents",
          },
        ],
      },
      {
        title: "My Requests",
        href: "/contraktai/requests",
        children: [
          {
            title: "Created Documents",
            href: "/contraktai/ai-documengt-creator/created-documents",
          },
        ],
      },
      { title: "AI Lawyer", href: "/contraktai/lawyer" },
    ],
  },
  adoptiq: {
    routeMatchers: ["/adoptiq"],
    items: [
      { title: "AdoptIQ", href: "/adoptiq" },
      {
        title: "Projects",
        href: "/adoptiq/projects",
      },
      { title: "Chatbots", href: "/adoptiq/chatbots" },
    ],
  },
};

const getCurrentNavConfig = (
  pathname: string
): { key: string; config: NavigationConfig } | null => {
  for (const [key, config] of Object.entries(navigationConfig)) {
    const isMatch = config.routeMatchers.some((matcher) =>
      pathname.startsWith(matcher)
    );
    if (isMatch) {
      return { key, config };
    }
  }
  return null;
};

export default function Navbar() {
  const pathname = usePathname();
  const currentNav = getCurrentNavConfig(pathname);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="fixed rounded-[50px] left-5 right-5 md:right-12 md:left-12 top-6 min-h-18 z-50 bg-white shadow-sm py-3 px-6 flex justify-between items-center gap-10">
      {/* Logo */}
      <div className="flex items-center gap-2">
        <Image src="/logo.svg" alt="Aktionable AI" width={180} height={60} />
      </div>

      {/* Right Side */}
      <div className="flex items-center gap-4 md:gap-6">
        {/* Desktop Navigation */}
        <NavigationMenuComponent
          currentNav={currentNav}
          className="hidden lg:flex"
        />

        {/* Mobile Toggle */}
        <button
          onClick={() => setMobileMenuOpen((prev) => !prev)}
          className="md:hidden"
        >
          <Menu size={24} className="text-gray-500" />
        </button>
        <Image src="/bell.svg" alt="bell" width={18} height={18} />
        <UserAvatarMenu
              src="/avatar.svg"
              alt="@user"
              fallback="AJ"
              name="Super Admin"
            />
        
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && currentNav && (
        <div className="absolute top-full mt-2 left-5 right-5 bg-white rounded-xl shadow-md p-4 md:hidden z-40 space-y-3 font-varela-round font-normal">
          {currentNav.config.items.map((item) => {
            const isActive =
              pathname === item.href ||
              item.children?.some((child) => pathname === child.href);

            return item.children ? (
              <div key={item.href} className="space-y-1">
                {/* Parent link - clickable */}

                {/* Collapsible for children */}
                <Collapsible>
                  <CollapsibleTrigger className={`w-full flex items-center justify-between text-left text-sm font-medium px-2 py-1  text-gray-600  hover:bg-gray-50 ${isActive ? "bg-[#004487] text-white rounded-3xl" : ""}`}>
                    <Link
                      href={item.href}
                      className={`block w-full text-left text-base font-medium px-2 py-2 rounded-md ${
                        pathname === item.href
                          ? " text-white "
                          : "text-black"
                      } hover:bg-blue-50`}
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {item.title}
                    </Link>
                    <ChevronDown size={20} className="mx-3"/>
                  </CollapsibleTrigger>
                  <CollapsibleContent className="pl-4 mt-1 space-y-1">
                    {item.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        className={`block text-sm rounded-md px-3 py-1 hover:bg-none hover:text-[#004487] ${
                          pathname === child.href
                            ? "text-black font-medium bg-none"
                            : "text-black"
                        }`}
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {child.title}
                      </Link>
                    ))}
                  </CollapsibleContent>
                </Collapsible>
              </div>
            ) : (
              <Link
                key={item.href}
                href={item.href}
                className={`block text-base font-medium px-4 py-2 rounded-3xl hover:bg-blue-50 ${
                  pathname === item.href
                    ? "bg-[#004487] text-white"
                    : "text-black"
                }`}
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.title}
              </Link>
            );
          })}
        </div>
      )}
    </nav>
  );
}

export function NavigationMenuComponent({
  currentNav,
  className = "hidden lg:flex",
}: NavigationMenuComponentProps) {
  const pathname = usePathname();

  if (!currentNav) return null;

  return (
    <div className={className}>
      <NavigationMenu className=" font-varela-round font-normal " viewport={false}>
        <NavigationMenuList className="gap-2">
          {currentNav.config.items.map((item) => {
            const isActive =
              pathname === item.href ||
              item.children?.some((child) => pathname === child.href);

            return (
              <NavigationMenuItem key={item.href}>
                {item.children ? (
                  <>
                    <NavigationMenuTrigger
                      className={`capitalize px-4 py-[23px] text-base font-medium transition-colors dark:bg-white ${
                        isActive
                          ? "bg-[#004487] text-white rounded-3xl"
                          : "rounded-3xl hover:bg-[#004487] text-black hover:text-white"
                      }`}
                    >
                      <Link
                        href={item.href}
                        className="w-full h-full flex items-center text-base "
                      >
                        {item.title}
                      </Link>
                    </NavigationMenuTrigger>
                    <NavigationMenuContent className="bg-transparent shadow-none" custom={true}>
                      <ul className="m-0 rounded-3xl w-[200px] h-fit">
                        {item.children.map((child) => (
                          <li key={child.href}>
                            <NavigationMenuLink
                              asChild
                              className="text-base bg-transparent rounded-3xl shadow-none"
                            >
                              <Link
                                href={child.href}
                                className={`text-base w-fit px-5 bg-transparent py-2 rounded-3xl  transition-colors ${
                                  pathname === child.href
                                    ? "text-white font-medium bg-[#004487]"
                                    : "text-black"
                                }`}
                              >
                                {child.title}
                              </Link>
                            </NavigationMenuLink>
                          </li>
                        ))}
                      </ul>
                    </NavigationMenuContent>
                  </>
                ) : (
                  <NavigationMenuLink
                    asChild
                    className="rounded-3xl text-base "
                  >
                    <Link
                      href={item.href}
                      className={`px-4 py-2 rounded-3xl font-medium transition-colors ${
                        pathname === item.href
                          ? "bg-[#004487] rounded-3xl text-white text-lg "
                          : "text-gray-700 rounded-3xl hover:bg-[#004487] hover:text-white text-lg"
                      }`}
                    >
                      {item.title}
                    </Link>
                  </NavigationMenuLink>
                )}
              </NavigationMenuItem>
            );
          })}
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  );
}
