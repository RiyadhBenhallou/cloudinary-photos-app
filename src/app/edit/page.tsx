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
      <section className="container mx-auto px-4">
        <div className="flex flex-col sm:flex-row justify-between items-center mb-4">
          <h1 className="text-3xl sm:text-4xl font-bold mb-4 sm:mb-0">Edit</h1>
        </div>
        <div className="flex flex-wrap gap-2 sm:gap-4 items-center mb-4">
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
        <div className="grid grid-cols-1 sm:grid-cols-2 items-center gap-8">
          <div className="rounded-lg overflow-hidden w-full max-w-[480px] mx-auto">
            <CldImage
              width="960"
              height="600"
              src={publicId}
              sizes="(max-width: 480px) 100vw, 480px"
              alt="Description of my image"
              className="w-full h-auto"
            />
          </div>
          <div className="w-full max-w-[480px] mx-auto">
            {transformation == "background-removal" && (
              <div className="rounded-lg overflow-hidden">
                <CldImage
                  width="960"
                  height="600"
                  src={publicId}
                  sizes="(max-width: 480px) 100vw, 480px"
                  alt="Description of my image"
                  removeBackground
                  className="w-full h-auto"
                />
              </div>
            )}
            {transformation == "generative-fill" && (
              <div className="rounded-lg overflow-hidden">
                <CldImage
                  width="960"
                  height="600"
                  src={publicId}
                  sizes="(max-width: 480px) 100vw, 480px"
                  alt="Description of my image"
                  crop={"pad"}
                  fillBackground={{
                    prompt,
                  }}
                  className="w-full h-auto"
                />
              </div>
            )}
            {transformation == "blur" && (
              <div className="rounded-lg overflow-hidden">
                <CldImage
                  width="960"
                  height="600"
                  src={publicId}
                  sizes="(max-width: 480px) 100vw, 480px"
                  alt="Description of my image"
                  blur
                  className="w-full h-auto"
                />
              </div>
            )}
            {transformation == "grayscale" && (
              <div className="rounded-lg overflow-hidden">
                <CldImage
                  width="960"
                  height="600"
                  src={publicId}
                  sizes="(max-width: 480px) 100vw, 480px"
                  alt="Description of my image"
                  grayscale
                  className="w-full h-auto"
                />
              </div>
            )}
            {transformation == "pixelate" && (
              <div className="rounded-lg overflow-hidden">
                <CldImage
                  width="960"
                  height="600"
                  src={publicId}
                  sizes="(max-width: 480px) 100vw, 480px"
                  alt="Description of my image"
                  pixelate
                  className="w-full h-auto"
                />
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
