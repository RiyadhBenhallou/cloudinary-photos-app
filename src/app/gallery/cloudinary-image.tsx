"use client";

import Heart from "@/components/icons/heart";
import { CldImage } from "next-cloudinary";
import { setAsFavorite } from "./actions";
import { startTransition, useTransition } from "react";
import { Button } from "@/components/ui/button";
import { SearchResults } from "./page";
import FullHeart from "@/components/icons/full-heart";
import { usePathname } from "next/navigation";

// type CloudinaryImageTypes = {
//   publicId: string;
//   tags: string[];
// };

export default function CloudinaryImage(props: any & SearchResults) {
  const [transition, startTransition] = useTransition();
  const path = usePathname();
  const isFavorited = props.tags.includes("favorite");
  return (
    <div className="relative border-white">
      <CldImage
        width="960"
        height="600"
        src={props.public_id}
        sizes="100vw"
        alt="Description of my image"
      />
      {isFavorited ? (
        <FullHeart
          onClick={() => {
            startTransition(() => {
              setAsFavorite(props.public_id, true, path);
            });
          }}
          className={`absolute top-2 right-2 text-red-500 hover:text-white hover:cursor-pointer`}
        />
      ) : (
        <Heart
          onClick={() => {
            startTransition(() => {
              setAsFavorite(props.public_id, false, path);
            });
          }}
          className={`absolute top-2 right-2 text-white hover:text-red-500 hover:cursor-pointer`}
        />
      )}
    </div>
  );
}
