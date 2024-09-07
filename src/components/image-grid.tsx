import CloudinaryImage from "@/components/cloudinary-image";
import { SearchResults } from "@/app/gallery/page";
import { getImageProps } from "next/image";
import { ReactNode } from "react";

const MAX_COLS = 4;
export default function ImageGrid({
  images,
  getImage,
}: {
  images: SearchResults[];
  getImage: (resource: SearchResults) => ReactNode;
}) {
  function getColumns(colIndex: number) {
    return images?.filter((_, idx) => {
      return idx % MAX_COLS === colIndex;
    });
  }
  return (
    <div className="grid grid-cols-4 gap-2">
      {[getColumns(0), getColumns(1), getColumns(2), getColumns(3)].map(
        (col, i) => {
          return (
            <div key={i} className="flex flex-col gap-4">
              {col.map(getImage)}
            </div>
          );
        }
      )}
    </div>
  );
}
