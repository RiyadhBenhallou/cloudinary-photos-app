import { CldImage } from "next-cloudinary";
import UploadButton from "./upload-button";
import cloudinary from "cloudinary";
import CloudinaryImage from "./cloudinary-image";
import ForceRefresh from "@/components/force-refresh";

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
        <div className="grid grid-cols-4 gap-2">
          {results?.resources?.map((resource) => {
            // console.log(resource.public_id);
            return <CloudinaryImage key={resource.public_id} {...resource} />;
          })}
        </div>
      </section>
    </>
  );
}
