import { HomeCard } from "@/components/home-card";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({ subsets: ["latin"] });

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
    <main className="flex min-h-screen w-full flex-col items-center justify-center p-4 sm:p-6 md:p-8">
      <h1 className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl ${montserrat.className} mb-8 text-center`}>
        Welcome to
        <span className={`text-slate-200 font-bold`}>
          {" "}
          Artif<span className="text-slate-400">Eye</span>
        </span>
      </h1>

      <div className="grid grid-cols-1 gap-6 mt-8 sm:grid-cols-2 lg:grid-cols-3 w-full max-w-7xl">
        <HomeCard
          name="Gallery"
          path="/gallery"
          className="bg-green-500 hover:bg-green-600 transition-colors duration-300"
          bulletPoints={galleryBulletPoints}
        />
        <HomeCard
          name="Albums"
          path="/albums"
          className="bg-blue-400 hover:bg-blue-500 transition-colors duration-300"
          bulletPoints={albumsBulletPoints}
        />
        <HomeCard
          name="Favorites"
          path="/favorites"
          className="bg-red-400 hover:bg-red-500 transition-colors duration-300"
          bulletPoints={favoritesBulletPoints}
        />
      </div>
{/* 
      <div className="w-full max-w-7xl mt-8">
        <div className="bg-yellow-500 hover:bg-yellow-600 transition-colors duration-300 rounded-lg flex items-center justify-center p-8 shadow-lg">
          <h2 className={`text-slate-800 text-2xl sm:text-3xl md:text-4xl lg:text-5xl ${montserrat.className} text-center font-light`}>
            A world for people with an <span className="font-bold">Eye</span>{" "}
            for <span className="font-bold">Art</span>
          </h2>
        </div>
      </div> */}
    </main>
  );
}
