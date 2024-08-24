import cloudinary from "cloudinary";
import ForceRefresh from "@/components/force-refresh";
import AlbumCard from "./album-card";

export type FolderType = {
  folders: { name: string; path: string }[];
};

export default async function AlbumsPage() {
  const results = (await cloudinary.v2.api.root_folders()) as FolderType;
  console.log(results.folders);

  return (
    <>
      <ForceRefresh />
      <section>
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-4xl font-bold">Albums</h1>
        </div>
        <div className="grid grid-cols-3 gap-4">
          {results.folders.map((folder) => {
            return <AlbumCard key={folder.name} folder={folder} />;
          })}
        </div>
      </section>
    </>
  );
}
