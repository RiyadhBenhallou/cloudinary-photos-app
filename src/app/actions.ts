"use server";

import { revalidatePath } from "next/cache";
import { SearchResults } from "./gallery/page";
import cloudinary from "cloudinary";

export async function addImageToAlbum(image: SearchResults, album: string) {
  await cloudinary.v2.api.create_folder(album);
  // let parts = image.public_id.split("/");
  // console.log(parts);
  // if (parts.length > 1) {
  //   parts = parts.slice(1);
  // }
  // const publicId = parts.join("/");
  // console.log(publicId);
  // await cloudinary.v2.uploader.rename(image.public_id, `${album}/${publicId}`);
}

export async function deleteImage(publicId: string, pathName: string) {
  await cloudinary.v2.uploader.destroy(publicId);
  revalidatePath(pathName);
  console.log("Deleted Successfully");
}
