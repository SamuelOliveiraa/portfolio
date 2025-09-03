"use client";

import { Link, usePathname } from "@/i18n/navigation";
import { Languages } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger
} from "../ui/dropdown-menu";

export default function LanguageSwitch() {
  const pathname = usePathname();
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="p-1 hover:bg-gray-100 rounded-md w-fit">
        <Languages className="text-gray-900" size={26} />
      </DropdownMenuTrigger>
      <DropdownMenuContent className="bg-gray-100 dark:bg-gray-900">
        <DropdownMenuLabel>Languages</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <Link href={pathname} locale="pt">
          <DropdownMenuItem>Portugues</DropdownMenuItem>
        </Link>
        <Link href={pathname} locale="en">
          <DropdownMenuItem>Ingles</DropdownMenuItem>
        </Link>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
