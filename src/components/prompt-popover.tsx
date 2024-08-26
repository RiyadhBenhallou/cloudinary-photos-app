"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { useRouter } from "next/navigation";
import { Dispatch, ReactNode, SetStateAction, useState } from "react";

export function PromptPopover({
  children,
  setTransformation,
  publicId,
}: {
  children: ReactNode;
  setTransformation: Dispatch<
    SetStateAction<
      | "generative-fill"
      | "blur"
      | "grayscale"
      | "pixelate"
      | "background-removal"
      | undefined
    >
  >;
  publicId: string;
}) {
  const [prompt, setPrompt] = useState("");
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const router = useRouter();
  return (
    <Popover
      open={isOpen}
      onOpenChange={(open) => {
        console.log(open);
        setIsOpen(open);
      }}
    >
      <PopoverTrigger asChild>{children}</PopoverTrigger>
      <PopoverContent className="w-80">
        <div className="flex gap-4 items-center justify-center">
          <Input
            id="search"
            onChange={(e) => {
              setPrompt(e.currentTarget.value);
            }}
            value={prompt}
            className="w-3/5"
            placeholder="Enter a prompt..."
          />
          <Button
            onClick={() => {
              setTransformation("generative-fill");
              router.push(`/edit?publicId=${publicId}&prompt=${prompt}`);
              setIsOpen(false);
            }}
            variant={"default"}
          >
            Apply
          </Button>
        </div>
      </PopoverContent>
    </Popover>
  );
}
