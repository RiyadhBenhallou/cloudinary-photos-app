"use server";

import { revalidatePath } from "next/cache";
import { SearchResults } from "./gallery/page";
import cloudinary from "cloudinary";


export async function addImageToAlbum(image: SearchResults, album: string) {
  await cloudinary.v2.api.create_folder(album);
  await cloudinary.v2.uploader.rename(image.public_id, `${album}/${image.public_id.split('/').pop()}`);
  revalidatePath('/gallery');
}

export async function deleteImage(publicId: string, pathName: string) {
  await cloudinary.v2.uploader.destroy(publicId);
  revalidatePath(pathName);
  console.log("Deleted Successfully");
}
