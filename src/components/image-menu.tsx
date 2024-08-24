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
import { Edit, FolderPlus } from "lucide-react";
import AddToAlbumDialog from "./add-to-album-dialog";
import { SearchResults } from "@/app/gallery/page";
import { Button } from "./ui/button";
import Link from "next/link";

export default function ImageMenu(
  props: ComponentProps<"div"> & { image: SearchResults }
) {
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
                <FolderPlus width={20} className="col-end-1" />
                <span className="text-xs col-span-2">Add to Album</span>
              </div>
            </AddToAlbumDialog>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Link href={`/edit?publicId=${props.image.public_id}`}>
              <div className="flex items-center gap-2">
                <Edit width={20} />
                <span className="text-xs">Edit</span>
              </div>
            </Link>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}
