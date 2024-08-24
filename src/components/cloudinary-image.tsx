"use client";

import Heart from "@/components/icons/heart";
import { CldImage } from "next-cloudinary";
import { setAsFavorite } from "../app/gallery/actions";
import { startTransition, useState, useTransition } from "react";
import { SearchResults } from "../app/gallery/page";
import FullHeart from "@/components/icons/full-heart";
import ImageMenu from "./image-menu";

export default function CloudinaryImage(props: any & SearchResults) {
  const [transition, startTransition] = useTransition();
  const [isFavorited, setIsFavortied] = useState(
    props.tags.includes("favorite")
  );
  return (
    <div className="relative rounded-sm overflow-hidden">
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
            if (props.onUnHeart) {
              props.onUnHeart();
            }
            setIsFavortied(false);
            startTransition(() => {
              setAsFavorite(props.public_id, true);
            });
          }}
          className={`absolute top-2 left-2 text-red-500 hover:text-white hover:cursor-pointer`}
        />
      ) : (
        <Heart
          onClick={() => {
            setIsFavortied(true);
            startTransition(() => {
              setAsFavorite(props.public_id, false);
            });
          }}
          className={`absolute top-2 left-2 text-white hover:text-red-500 hover:cursor-pointer`}
        />
      )}
      <ImageMenu className="absolute top-2 right-2" image={props} />
    </div>
  );
}
