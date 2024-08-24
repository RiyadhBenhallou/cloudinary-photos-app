"use client";
import { useState } from "react";
import CloudinaryImage from "../../components/cloudinary-image";
import ImageGrid from "@/components/image-grid";

export type SearchResults = {
  public_id: string;
  tags: string[];
};

export default function FavoritesList({
  initialResults,
}: {
  initialResults: { resources: SearchResults[] };
}) {
  const [results, setResults] = useState(initialResults);

  return (
    <>
      <ImageGrid
        images={results.resources}
        getImage={(resource) => {
          return (
            <CloudinaryImage
              key={resource.public_id}
              {...resource}
              onUnHeart={() => {
                setResults((prevResults) => {
                  return {
                    ...prevResults,
                    resources: prevResults.resources.filter(
                      (r) => r.public_id !== resource.public_id
                    ),
                  };
                });
              }}
            />
          );
        }}
      />
    </>
  );
}
