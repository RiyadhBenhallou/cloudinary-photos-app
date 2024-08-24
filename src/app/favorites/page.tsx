import { CldImage } from "next-cloudinary";
import UploadButton from "../gallery//upload-button";
import cloudinary from "cloudinary";
import CloudinaryImage from "../../components/cloudinary-image";
import ForceRefresh from "@/components/force-refresh";
import FavoritesList from "./favorites-list";

export type SearchResults = {
  public_id: string;
  tags: string[];
};
export default async function GalleryPage() {
  const results = (await cloudinary.v2.search
    .expression("resource_type:image AND tags=favorite")
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
          <h1 className="text-4xl font-bold">Favorites</h1>
          <UploadButton />
        </div>
        <FavoritesList initialResults={results} />
      </section>
    </>
  );
}
