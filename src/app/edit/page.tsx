"use client";
import ForceRefresh from "@/components/force-refresh";
import { PromptPopover } from "@/components/prompt-popover";
import { Button } from "@/components/ui/button";
import { CldImage } from "next-cloudinary";
import { useState } from "react";

export default function EditPage({
  searchParams: { publicId, prompt },
}: {
  searchParams: { publicId: string; prompt: string };
}) {
  const [transformation, setTransformation] = useState<
    | undefined
    | "generative-fill"
    | "blur"
    | "grayscale"
    | "pixelate"
    | "background-removal"
  >();

  return (
    <>
      <ForceRefresh />
      <section>
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-4xl font-bold">Edit</h1>
        </div>
        <div className="flex gap-4 items-center mb-4">
          <Button
            variant={"destructive"}
            onClick={() => {
              setTransformation(undefined);
            }}
          >
            Clear All
          </Button>
          <Button
            variant={"secondary"}
            onClick={() => {
              setTransformation("background-removal");
            }}
          >
            Remove Background
          </Button>
          <PromptPopover
            setTransformation={setTransformation}
            publicId={publicId}
          >
            <Button variant={"secondary"}>Generative Fill</Button>
          </PromptPopover>
          <Button
            variant={"secondary"}
            onClick={() => {
              setTransformation("blur");
            }}
          >
            Blur
          </Button>
          <Button
            variant={"secondary"}
            onClick={() => {
              setTransformation("grayscale");
            }}
          >
            Grayscale
          </Button>
          <Button
            variant={"secondary"}
            onClick={() => {
              setTransformation("pixelate");
            }}
          >
            Pixelate
          </Button>
        </div>
        <div className="grid grid-cols-2 items-center gap-8">
          <div className="rounded-lg overflow-hidden w-[480px]">
            <CldImage
              width="960"
              height="600"
              src={publicId}
              sizes="100vw"
              alt="Description of my image"
            />
          </div>
          <div className="">
            {transformation == "background-removal" && (
              <div className="rounded-lg overflow-hidden w-[480px]">
                <CldImage
                  width="960"
                  height="600"
                  src={publicId}
                  sizes="100vw"
                  alt="Description of my image"
                  removeBackground
                />
              </div>
            )}
            {transformation == "generative-fill" && (
              <div className="rounded-lg overflow-hidden w-[480px]">
                <CldImage
                  width="960"
                  height="600"
                  src={publicId}
                  sizes="100vw"
                  alt="Description of my image"
                  crop={"pad"}
                  fillBackground={{
                    prompt,
                  }}
                />
              </div>
            )}
            {transformation == "blur" && (
              <div className="rounded-lg overflow-hidden w-[480px]">
                <CldImage
                  width="960"
                  height="600"
                  src={publicId}
                  sizes="100vw"
                  alt="Description of my image"
                  blur
                />
              </div>
            )}
            {transformation == "grayscale" && (
              <div className="rounded-lg overflow-hidden w-[480px]">
                <CldImage
                  width="960"
                  height="600"
                  src={publicId}
                  sizes="100vw"
                  alt="Description of my image"
                  grayscale
                />
              </div>
            )}
            {transformation == "pixelate" && (
              <div className="rounded-lg overflow-hidden w-[480px]">
                <CldImage
                  width="960"
                  height="600"
                  src={publicId}
                  sizes="100vw"
                  alt="Description of my image"
                  pixelate
                />
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
