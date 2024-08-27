import { HomeCard } from "@/components/home-card";
import { CldUploadButton } from "next-cloudinary";
import { CldImage } from "next-cloudinary";
import { Montserrat } from "next/font/google";
import { useState } from "react";

const montserrat = Montserrat({ subsets: ["latin"] });

export type resultsType = {
  event: string;
  info: {
    public_id: string;
  };
};

const galleryBulletPoints = [
  { title: "View a collection of all your photos and videos." },
  { title: "Easily navigate through thumbnails to find specific media." },
  { title: "Organize media by date, location, or custom tags." },
];

const albumsBulletPoints = [
  { title: "Create and manage custom photo and video albums." },
  { title: "Add or remove media from your albums with ease." },
  { title: "Share your albums with friends and family." },
];

const favoritesBulletPoints = [
  { title: "Access your favorite photos and videos quickly." },
  { title: "Mark media as favorites to keep them in a special collection." },
  { title: "Easily view and manage all your starred content." },
];

export default function Home() {
  return (
    <main className="flex min-h-screen w-full flex-col items-center justify-center">
      <h1 className={`text-4xl ${montserrat.className} mb-4 text-center`}>
        Welcome to
        <span className={`text-slate-200 font-bold text-4xl`}>
          {" "}
          Artif<span className="text-slate-400">Eye</span>
        </span>
      </h1>

      <div className="grid grid-cols-1 gap-4 mt-4 sm:grid-cols-2 md:grid-cols-3">
        <HomeCard
          name="Gallery"
          path="/gallery"
          className="bg-green-500"
          bulletPoints={galleryBulletPoints}
        />
        <HomeCard
          name="Albums"
          path="/albums"
          className="bg-blue-400"
          bulletPoints={albumsBulletPoints}
        />
        <HomeCard
          name="Favorites"
          path="/favorites"
          className="bg-red-400"
          bulletPoints={favoritesBulletPoints}
        />
        <div className="col-span-3 min-h-32 bg-yellow-500 rounded-lg flex items-center justify-center p-4">
          <h1
            className={`text-slate-700 md:text-2xl lg:text-3xl ${montserrat.className}`}
          >
            A world for people with an <span className="font-bold">Eye</span>{" "}
            for <span className="font-bold">Art</span>
          </h1>
        </div>
      </div>
    </main>
  );
}
