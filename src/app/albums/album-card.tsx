import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { FolderType } from "./page";
import Link from "next/link";

export default function AlbumCard({
  folder,
}: {
  folder: { name: string; path: string };
}) {
  return (
    <Card className="">
      <CardHeader>
        <CardTitle>{folder.name}</CardTitle>
        <CardDescription>All your {folder.name} images</CardDescription>
      </CardHeader>
      <CardContent></CardContent>
      <CardFooter className="flex justify-between">
        <Button>
          <Link href={`albums/${folder.path}`}>View Album</Link>
        </Button>
      </CardFooter>
    </Card>
  );
}
