"use client";
import { CldUploadButton } from "next-cloudinary";
import { CldImage } from "next-cloudinary";
import { useState } from "react";

export type resultsType = {
  event: string;
  info: {
    public_id: string;
  };
};
export default function Home() {
  const [publicId, setPublicId] = useState("ocaoz4o8z3jckywfctuf");
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <CldUploadButton
        onSuccess={(results: resultsType) => {
          return console.log(results);
          // setPublicId(results.info.public_id);
        }}
        uploadPreset="htfrhjyy"
      />
      {publicId && (
        <CldImage
          width="960"
          height="600"
          src={publicId}
          sizes="100vw"
          replace={["car", "fighter jet"]}
          alt="Description of my image"
        />
      )}
    </main>
  );
}
