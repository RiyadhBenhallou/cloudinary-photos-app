import { CldImage } from "next-cloudinary";
import UploadButton from "./upload-button";
import cloudinary from "cloudinary";
import CloudinaryImage from "../../components/cloudinary-image";
import ForceRefresh from "@/components/force-refresh";
import ImageGrid from "@/components/image-grid";

export type SearchResults = {
  public_id: string;
  tags: string[];
};

export default async function GalleryPage() {
  const results = (await cloudinary.v2.search
    .expression("resource_type:image")
    .sort_by("created_at", "desc")
    .with_field("tags")
    .max_results(30)
    .execute()
    .then()) as { resources: SearchResults[] };
  console.log(results);

  return (
    <>
      <ForceRefresh />
      <section>
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-4xl font-bold">Gallery</h1>
          <UploadButton />
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
