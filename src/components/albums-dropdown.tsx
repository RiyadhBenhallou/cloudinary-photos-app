"use client";
import { FolderType } from "@/app/albums/page";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ArrowUp, ChevronDown, ChevronUp } from "lucide-react";
import Link from "next/link";
import { ReactNode, useState } from "react";

export default function AlbumsDropdown({
  folders,
}: {
  folders: { name: string; path: string }[];
}) {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  return (
    <DropdownMenu
      open={isOpen}
      onOpenChange={(open) => {
        setIsOpen(open);
      }}
    >
      <DropdownMenuTrigger asChild>
        <Button asChild variant="ghost" className="w-full cursor-pointer">
          <div className="flex justify-between items-center">
            <Link
              href="/albums"
              className="justify-start flex items-center gap-2"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.25 12.75V12A2.25 2.25 0 014.5 9.75h15A2.25 2.25 0 0121.75 12v.75m-8.69-6.44l-2.12-2.12a1.5 1.5 0 00-1.061-.44H4.5A2.25 2.25 0 002.25 6v12a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9a2.25 2.25 0 00-2.25-2.25h-5.379a1.5 1.5 0 01-1.06-.44z"
                />
              </svg>
              Albums
            </Link>
            <ChevronDown
              className={`w-6 ${
                isOpen && "rotate-180"
              } transition-all duration-700`}
            />
          </div>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-48">
        <DropdownMenuGroup>
          {folders.map((folder) => {
            return (
              <>
                <DropdownMenuItem key={folder.name}>
                  <Link href={`/albums/${folder.path}`} className="w-full">
                    {folder.name}
                  </Link>
                </DropdownMenuItem>
              </>
            );
          })}
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

// {folders.map((folder) => (
//     <Button
//       variant="ghost"
//       asChild
//       key={folder.name}
//       className="w-full justify-start flex gap-2"
//     >
//       <Link className="pl-8" href={`/albums/${folder.path}`}>
//         {folder.name}
//       </Link>
//     </Button>
//   ))}
