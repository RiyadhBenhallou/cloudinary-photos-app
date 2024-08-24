import { SearchResults } from "@/app/gallery/page";
import UploadButton from "@/app/gallery/upload-button";
import CloudinaryImage from "@/components/cloudinary-image";
import ForceRefresh from "@/components/force-refresh";
import ImageGrid from "@/components/image-grid";
import cloudinary from "cloudinary";

export default async function AlbumName({
  params,
}: {
  params: { albumName: string };
}) {
  const results = (await cloudinary.v2.search
    .expression(`resource_type:image AND folder=${params.albumName}`)
    .sort_by("created_at", "desc")
    .with_field("tags")
    .max_results(30)
    .execute()
    .then()) as { resources: SearchResults[] };

  return (
    <>
      <ForceRefresh />
      <section>
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-4xl font-bold">{params.albumName}</h1>
        </div>
        <ImageGrid
          images={results.resources}
          getImage={(resource) => (
            <CloudinaryImage key={resource.public_id} {...resource} />
          )}
        />
      </section>
    </>
  );
}
