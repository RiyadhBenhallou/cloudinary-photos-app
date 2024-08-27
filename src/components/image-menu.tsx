"use client";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ComponentProps } from "react";
import Menu from "./icons/menu";
import Album from "./icons/album";
import { Delete, Edit, FolderPlus } from "lucide-react";
import AddToAlbumDialog from "./add-to-album-dialog";
import { SearchResults } from "@/app/gallery/page";
import { Button } from "./ui/button";
import Link from "next/link";
import { deleteImage } from "@/app/actions";
import { usePathname, useRouter } from "next/navigation";

export default function ImageMenu(
  props: ComponentProps<"div"> & { image: SearchResults }
) {
  const pathName = usePathname();
  const router = useRouter();
  return (
    <div {...props}>
      <DropdownMenu>
        <DropdownMenuTrigger>
          <Menu />
        </DropdownMenuTrigger>
        <DropdownMenuContent className="">
          <DropdownMenuItem asChild>
            <AddToAlbumDialog image={props.image}>
              <div className="flex items-center gap-4">
                <FolderPlus width={20} className="" />
                <span className="text-xs">Add to Album</span>
              </div>
            </AddToAlbumDialog>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Link
              href={`/edit?publicId=${props.image.public_id}`}
              className="flex justify-start gap-4 cursor-pointer w-full"
            >
              <div className="flex items-center gap-2 text-left pl-2">
                <Edit width={20} />
                <span className="text-xs pl-2">Edit</span>
              </div>
            </Link>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <button
              onClick={async () => {
                await deleteImage(props.image.public_id, pathName);
                setTimeout(() => {
                  router.refresh();
                }, 1000);
              }}
              className="flex items-center gap-2 text-left pl-2 w-full"
            >
              <Delete width={20} className="text-red-500" />
              <span className="text-xs pl-2 text-red-500">Delete</span>
            </button>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}
