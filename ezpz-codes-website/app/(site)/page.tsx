import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { libraries } from "@/lib/libraries";
import { Github } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { ModeToggle } from "@/components/mode-toggle";

export default function Home() {
    return (
        <main>
            <div className="container flex flex-col px-10 py-24 items-center gap-6 md:py-36">
                <Image
                    src="/logo.svg"
                    alt="ezpz"
                    width={128}
                    height={128}
                    priority
                    className="dark:invert"
                />

                <h1 className="text-2xl max-w-lg text-center font-medium">
                    A collection of .NET and React libraries that will make your
                    life a little bit easier (...peasier lemon squeezier).
                </h1>

                <div className="flex gap-2">
                    <Button variant="outline" size="icon" asChild>
                        <Link
                            href="https://github.com/ezpz-codes"
                            target="_blank"
                        >
                            <Github className="h-5 w-5" />
                        </Link>
                    </Button>

                    <ModeToggle />
                </div>
            </div>

            <div className="container flex flex-wrap gap-6 pb-10 justify-center items-start">
                {libraries.map((x) => {
                    return (
                        <Card
                            key={x.title}
                            className="flex-1 w-0 min-w-md max-w-xl"
                        >
                            <CardHeader>
                                <CardTitle className="break-words">
                                    {x.title}
                                </CardTitle>

                                <div className="flex flex-wrap gap-2 pt-1">
                                    {x.categories.map((y) => {
                                        return (
                                            <Badge key={y} variant="secondary">
                                                {y}
                                            </Badge>
                                        );
                                    })}
                                </div>
                            </CardHeader>

                            <CardContent className="text-muted-foreground">
                                {x.description}
                            </CardContent>

                            <CardFooter>
                                {x.isComingSoon === true ? (
                                    <div className="text-sm text-muted-foreground italic">
                                        Coming soon...
                                    </div>
                                ) : x.url ? (
                                    <Button asChild>
                                        <Link href={x.url}>
                                            {x.cta ?? "Learn more"}
                                        </Link>
                                    </Button>
                                ) : null}
                            </CardFooter>
                        </Card>
                    );
                })}
            </div>
        </main>
    );
}
