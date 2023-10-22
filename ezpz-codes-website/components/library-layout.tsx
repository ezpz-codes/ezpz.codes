"use client";

import Image from "next/image";
import { Button } from "./ui/button";
import Link from "next/link";
import { Github, Home, Menu } from "lucide-react";
import { ModeToggle } from "./mode-toggle";
import { usePathname } from "next/navigation";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import { DialogClose } from "@radix-ui/react-dialog";

export interface IMenuItem {
    text: string;
    url: string;
}

export interface IMenuSection {
    text: string;
    menuItems: IMenuItem[];
}

export interface ILibraryLayoutProps {
    title: string;
    url: string;
    githubLink?: string;
    menuSections: IMenuSection[];
    children: React.ReactNode;
}

export default function LibraryLayout(props: ILibraryLayoutProps) {
    const pathname = usePathname();

    const renderDesktopNav = () => {
        return (
            <nav className="py-6 pr-6 overflow-y-auto overflow-x-hidden hidden md:block w-64 h-[calc(100vh-72px)] sticky top-[72px]">
                <ul className="space-y-8">
                    <li>
                        <Button variant="outline" className="w-full" asChild>
                            <Link
                                href={props.url}
                                className="flex items-center"
                            >
                                <Home className="mr-2 h-4 w-4" /> Home
                            </Link>
                        </Button>
                    </li>

                    {props.menuSections.map((menuSection) => {
                        return (
                            <li key={menuSection.text}>
                                <h4
                                    className="text-sm font-semibold truncate"
                                    title={menuSection.text}
                                >
                                    {menuSection.text}
                                </h4>

                                <ul className="mt-3 space-y-2">
                                    {menuSection.menuItems.map((menuItem) => {
                                        return (
                                            <li
                                                key={`${menuSection.text}.${menuItem.text}`}
                                                className={`text-sm hover:underline ${
                                                    pathname ===
                                                        `${props.url}${menuItem.url}` ||
                                                    pathname ===
                                                        `${props.url}${menuItem.url}/`
                                                        ? "text-foreground font-medium"
                                                        : "text-muted-foreground font-normal"
                                                }`}
                                            >
                                                <Link
                                                    href={`${props.url}${menuItem.url}`}
                                                    title={menuItem.text}
                                                    className="w-full block truncate"
                                                >
                                                    {menuItem.text}
                                                </Link>
                                            </li>
                                        );
                                    })}
                                </ul>
                            </li>
                        );
                    })}
                </ul>
            </nav>
        );
    };

    const renderMobileNav = () => {
        return (
            <nav className="py-6 overflow-y-auto overflow-x-hidden w-full px-4">
                <ul className="space-y-8">
                    <li>
                        <DialogClose asChild>
                            <Button
                                variant="outline"
                                className="w-full"
                                asChild
                            >
                                <Link
                                    href={props.url}
                                    className="flex items-center"
                                >
                                    <Home className="mr-2 h-4 w-4" /> Home
                                </Link>
                            </Button>
                        </DialogClose>
                    </li>

                    {props.menuSections.map((menuSection) => {
                        return (
                            <li key={menuSection.text}>
                                <h4
                                    className="text-sm font-semibold truncate"
                                    title={menuSection.text}
                                >
                                    {menuSection.text}
                                </h4>

                                <ul className="mt-3 space-y-2">
                                    {menuSection.menuItems.map((menuItem) => {
                                        return (
                                            <li
                                                key={`${menuSection.text}.${menuItem.text}`}
                                                className={`text-sm hover:underline ${
                                                    pathname ===
                                                    `${props.url}${menuItem.url}`
                                                        ? "text-foreground font-medium"
                                                        : "text-muted-foreground font-normal"
                                                }`}
                                            >
                                                <DialogClose asChild>
                                                    <Link
                                                        href={`${props.url}${menuItem.url}`}
                                                        title={menuItem.text}
                                                        className="w-full block truncate"
                                                    >
                                                        {menuItem.text}
                                                    </Link>
                                                </DialogClose>
                                            </li>
                                        );
                                    })}
                                </ul>
                            </li>
                        );
                    })}
                </ul>
            </nav>
        );
    };

    return (
        <div className="relative flex min-h-screen flex-col">
            <header className="border-gray-300 border-b border-solid dark:border-gray-700 sticky top-0 z-50 bg-background h-[72px]">
                <div className="flex justify-between items-center py-4 container">
                    <div className="flex gap-4 items-center">
                        <Sheet>
                            <SheetTrigger asChild>
                                <Button
                                    variant="outline"
                                    size="icon"
                                    className="md:hidden"
                                >
                                    <Menu className="h-5 w-5" />
                                </Button>
                            </SheetTrigger>

                            <SheetContent
                                side="left"
                                className="flex flex-col p-0"
                            >
                                <div className="flex gap-4 items-center pt-12 pb-2 px-6">
                                    <Link href="/">
                                        <Image
                                            src="/logo.svg"
                                            alt="ezpz"
                                            width={40}
                                            height={40}
                                            priority
                                            className="dark:invert"
                                            style={{
                                                minWidth: 40,
                                                minHeight: 40,
                                            }}
                                        />
                                    </Link>

                                    <h1
                                        className="text-lg font-medium truncate"
                                        title={props.title}
                                    >
                                        {props.title}
                                    </h1>
                                </div>

                                {renderMobileNav()}
                            </SheetContent>
                        </Sheet>

                        <Link href="/" className="hidden md:block">
                            <Image
                                src="/logo.svg"
                                alt="ezpz"
                                width={40}
                                height={40}
                                priority
                                className="dark:invert"
                                style={{ minWidth: 40, minHeight: 40 }}
                            />
                        </Link>

                        <h1 className="text-lg font-medium truncate hidden md:block">
                            {props.title}
                        </h1>
                    </div>

                    <div className="flex gap-2 items-center">
                        {props.githubLink && (
                            <Button variant="outline" size="icon" asChild>
                                <Link href={props.githubLink} target="_blank">
                                    <Github className="h-5 w-5" />
                                    <span className="sr-only">
                                        Toggle theme
                                    </span>
                                </Link>
                            </Button>
                        )}

                        <ModeToggle />
                    </div>
                </div>
            </header>

            <div className="flex-1 flex justify-stretch gap-12 container">
                {renderDesktopNav()}

                <main className="flex-1 py-6 overflow-y-auto">
                    {props.children}
                </main>
            </div>
        </div>
    );
}
