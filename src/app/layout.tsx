import AlbumsDropdown from "@/components/albums-dropdown";
import Heart from "@/components/icons/heart";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import cloudinary from "cloudinary";
import { Home } from "lucide-react";
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
    <div className="pb-12 w-1/5 border-r-2 border-slate-800">
      <div className="space-y-4 py-4">
        <div className="px-3 py-2">
          <h2 className="mb-2 px-4 text-lg font-semibold tracking-tight">
            Manage
          </h2>
          <div className="space-y-1">
            <Button
              asChild
              variant="ghost"
              className="w-full justify-start flex gap-2 group"
            >
              <Link href="/">
                <Home className="group-hover:text-yellow-500 transition-all duration-400" />
                Home
              </Link>
            </Button>
            <Button
              asChild
              variant="ghost"
              className="w-full justify-start flex gap-2 group"
            >
              <Link href="/gallery">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6 group-hover:text-green-500 transition-all duration-400"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
                  />
                </svg>
                Gallery
              </Link>
            </Button>
            <AlbumsDropdown folders={folders} />
            <Button
              asChild
              variant="ghost"
              className="w-full justify-start flex gap-2 group"
            >
              <Link href="/favorites">
                <Heart
                  className={`group-hover:text-red-500 transition-all duration-400`}
                />
                Favorites
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
            className={`flex h-16 items-center px-4 container mx-auto montserrat-font]`}
          >
            <div
              className={`${montserrat.className} text-slate-200 font-bold text-xl`}
            >
              Artif<span className="text-slate-400">Eye</span>
            </div>
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
