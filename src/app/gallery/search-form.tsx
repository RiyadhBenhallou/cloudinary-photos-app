"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const SearchForm = ({
  initialSearch,
}: {
  initialSearch: string | undefined;
}) => {
  const [tagName, setTagName] = useState<string | undefined>(
    initialSearch ?? ""
  );
  const router = useRouter();

  useEffect(() => {
    setTagName(initialSearch);
  }, [initialSearch]);
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        router.push(`/gallery?search=${tagName}`);
        router.refresh();
      }}
      className="w-full m-4"
    >
      <div className="flex gap-4 items-center justify-center">
        <Input
          id="search"
          onChange={(e) => {
            setTagName(e.currentTarget.value);
          }}
          value={tagName}
          className="w-3/5"
          placeholder="Search for something by tag name..."
        />
        <Button type="submit" variant={"default"}>
          Search
        </Button>
      </div>
    </form>
  );
};
export default SearchForm;
