"use client";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import { useRouter } from "next/navigation"; 
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
 
const router = useRouter();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Avatar className="cursor-pointer h-8 w-8 font-quicksand">
          <AvatarImage src={src} alt={alt} />
          <AvatarFallback>{fallback}</AvatarFallback>
        </Avatar>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-44 mt-6 rounded-2xl font-quicksand">
        <DropdownMenuLabel className="text-base font-semibold">
          {name}
        </DropdownMenuLabel>
        <DropdownMenuItem className="text-sm font-medium">
          My Profile
        </DropdownMenuItem>
        <DropdownMenuItem className="text-sm font-medium" onClick={()=>{router.push("/organization")}}>
          Dashboard
        </DropdownMenuItem>
        <DropdownMenuItem className="text-sm font-medium">
          Settings
        </DropdownMenuItem>
        <DropdownMenuItem className="text-sm font-medium">
          Logout
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}