import LibraryLayout from "@/components/library-layout";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "EntityFrameworkCore.Migrator.AspNetCore - ezpz",
    description:
        "Tool that provides you a UI to make your migration management a little bit easier.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <LibraryLayout
            title="EntityFrameworkCore.Migrator.AspNetCore"
            url="/efcore-migrator"
            githubLink="https://github.com/ezpz-codes/EntityFrameworkCore.Migrator.AspNetCore"
            menuSections={[
                {
                    text: "Instructions",
                    menuItems: [
                        {
                            text: "Setup",
                            url: "/setup",
                        },
                        {
                            text: "Configuration",
                            url: "/configuration",
                        },
                    ],
                },
            ]}
        >
            {children}
        </LibraryLayout>
    );
}
