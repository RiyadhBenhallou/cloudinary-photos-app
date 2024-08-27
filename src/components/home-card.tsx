import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";

type CardProps = React.ComponentProps<typeof Card> & {
  name: string;
  path: string;
  bulletPoints: { title: string }[];
};

export function HomeCard({ className, ...props }: CardProps) {
  return (
    <Card className={cn(`w-[320px]`, className)} {...props}>
      <CardHeader>
        <CardTitle>{props.name}</CardTitle>
      </CardHeader>
      <CardContent className="grid gap-4">
        <div>
          {props.bulletPoints.map((notification, index) => (
            <div
              key={index}
              className="mb-4 grid grid-cols-[25px_1fr] items-start pb-4 last:mb-0 last:pb-0"
            >
              <span className="flex h-2 w-2 translate-y-1 rounded-full bg-indigo-500" />
              <div className="space-y-1">
                <p className="text-sm font-medium leading-none">
                  {notification.title}
                </p>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
      <CardFooter>
        <Link href={props.path}>
          <Button className="w-full">Go to {props.name} page</Button>
        </Link>
      </CardFooter>
    </Card>
  );
}
