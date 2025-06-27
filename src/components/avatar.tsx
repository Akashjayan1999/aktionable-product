"use client";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";

interface UserAvatarMenuProps {
  src: string;
  alt?: string;
  fallback?: string;
  name?: string;
}

export function UserAvatarMenu({
  src,
  alt = "@user",
  fallback = "SA",
  name = "Super Admin",
}: UserAvatarMenuProps) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Avatar className="cursor-pointer h-8 w-8">
          <AvatarImage src={src} alt={alt} />
          <AvatarFallback>{fallback}</AvatarFallback>
        </Avatar>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-44 mt-6 rounded-2xl">
        <DropdownMenuLabel className="text-base font-semibold font-quicksand">
          {name}
        </DropdownMenuLabel>
        <DropdownMenuItem className="text-sm font-medium font-quicksand">
          My Profile
        </DropdownMenuItem>
        <DropdownMenuItem className="text-sm font-medium font-quicksand">
          Dashboard
        </DropdownMenuItem>
        <DropdownMenuItem className="text-sm font-medium font-quicksand">
          Settings
        </DropdownMenuItem>
        <DropdownMenuItem className="text-sm font-medium font-quicksand">
          Logout
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}