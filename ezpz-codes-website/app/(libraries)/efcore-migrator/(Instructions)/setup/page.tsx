import Code from "@/components/code";
import CodeBlock from "@/components/code-block";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
    title: "Installation - EntityFrameworkCore.Migrator.AspNetCore - ezpz",
};

export default function Setup() {
    return (
        <div>
            <h2 className="text-3xl font-semibold">Setup</h2>

            <p className="mt-8">
                To install the library, you can run the following command:
            </p>

            <CodeBlock
                codesTabs={{
                    ".NET CLI": {
                        language: "bash",
                        text: "dotnet add package EntityFrameworkCore.Migrator.AspNetCore",
                    },
                    "Package Manager": {
                        language: "bash",
                        text: "Install-Package EntityFrameworkCore.Migrator.AspNetCore",
                    },
                }}
                className="mt-4"
            />

            <p className="mt-8">
                To add the tool to your ASP.NET Core project, you need to add
                the following line to your{" "}
                <Code text="Program.cs" language="csharp" /> or{" "}
                <Code text="Startup.cs" language="csharp" /> file (you also need
                to register your database context and replace{" "}
                <Code text="DatabaseContext" language="csharp" /> with your{" "}
                <Code text="DbContext" language="csharp" /> type):
            </p>

            <CodeBlock
                code={{
                    language: "csharp",
                    text: "builder.Services.AddEntityFrameworkCoreMigrator<DatabaseContext>();",
                }}
                className="mt-4"
            />

            <p className="mt-8">
                Since the tool is using Razor Pages, make sure you add services
                and mapping, as well as static static files in your{" "}
                <Code text="Program.cs" language="csharp" /> or{" "}
                <Code text="Startup.cs" language="csharp" /> file.
            </p>

            <CodeBlock
                code={{
                    language: "csharp",
                    text: "builder.Services.AddRazorPages();",
                }}
                className="mt-4"
            />

            <CodeBlock
                code={{
                    language: "csharp",
                    text: "app.UseStaticFiles();\napp.MapRazorPages();",
                }}
                className="mt-4"
            />

            <div className="flex justify-between mt-16">
                <div />

                <Button variant="outline" className="self-end" asChild>
                    <Link href="/efcore-migrator/configuration">
                        Configuration <ChevronRight className="ml-2 h-4 w-4" />
                    </Link>
                </Button>
            </div>
        </div>
    );
}
