import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import cloudinary from "cloudinary";
import { Folders, HeartIcon, Home } from "lucide-react";
import type { Metadata } from "next";
import { Inter, Montserrat } from "next/font/google";
import Link from "next/link";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });
const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "ArtifEye - a Photos gallery",
  description: "A world for people with an eye for art.",
};

async function SideMenu() {
  const { folders } = (await cloudinary.v2.api.root_folders()) as {
    folders: { name: string; path: string }[];
  };

  return (
    <div className="pb-12 w-1/5 md:w-1/5 border-r-2 border-slate-800 transition-all duration-300">
      <div className="space-y-4 py-4">
        <div className="px-3 py-2">
          <h2 className="mb-2 px-4 text-lg font-semibold tracking-tight hidden md:hidden">
            Manage
          </h2>
          <div className="space-y-1">
            <Button
              asChild
              variant="ghost"
              className="w-full justify-start flex gap-2 group"
            >
              <Link href="/">
                <Home className="group-hover:text-yellow-500 transition-all duration-400 size-8" />
                <span className="hidden md:inline">Home</span>
              </Link>
            </Button>
            <Button
              asChild
              variant="ghost"
              className="w-full justify-start flex gap-2 group"
            >
              <Link href="/gallery">
                <Folders className="group-hover:text-green-500 transition-all duration-400 size-8" />
                <span className="hidden md:inline">Gallery</span>
              </Link>
            </Button>
            {/* <AlbumsDropdown folders={folders} /> */}
            <Button
              asChild
              variant="ghost"
              className="w-full justify-start flex gap-2 group"
            >
              <Link href="/favorites">
                <HeartIcon
                  className='group-hover:text-red-500 transition-all duration-400 text-col size-8'
                />
                <span className="hidden md:inline">Favorites</span>
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={inter.className}>
        <div className="border-b border-slate-800">
          <div
            className={`flex h-16 items-center px-4 container mx-auto`}
          >
            <Link href={'/'}>
            <div
              className={`${montserrat.className} text-slate-200 font-bold text-2xl`}
            >
              Artif<span className="text-slate-400">Eye</span>
            </div>
            </Link>
            <div className="ml-auto flex items-center space-x-4">
              <Avatar>
                <AvatarImage src="https://github.com/shadcn.png" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
            </div>
          </div>
        </div>
        <div className="flex"> 

          <SideMenu />
          <main className="w-full px-4 py-4">{children}</main>
        </div>
      </body>
    </html>
  );
}
