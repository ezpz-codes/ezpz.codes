import Code from "@/components/code";
import CodeBlock from "@/components/code-block";
import { Button } from "@/components/ui/button";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import { ChevronLeft } from "lucide-react";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
    title: "Configuration - EntityFrameworkCore.Migrator.AspNetCore - ezpz",
};

export default function Configuration() {
    return (
        <div>
            <h2 className="text-3xl font-semibold">Configuration</h2>

            <p className="mt-8">
                To configure the tool, you can set the parameters in the
                configuration method.
            </p>

            <CodeBlock
                code={{
                    text: 'builder.Services.AddEntityFrameworkCoreMigrator<DatabaseContext>(options => \n{\n    options.Title = "Database migrator";\n});',
                    language: "csharp",
                }}
                className="mt-4"
            />

            <Table className="mt-12">
                <TableHeader>
                    <TableRow>
                        <TableHead>Name</TableHead>

                        <TableHead>Description</TableHead>

                        <TableHead>Type</TableHead>

                        <TableHead>Default value</TableHead>
                    </TableRow>
                </TableHeader>

                <TableBody>
                    <TableRow>
                        <TableCell className="font-semibold">Title</TableCell>

                        <TableCell>
                            Title that appears in the navbar as a link to the
                            homepage of the migrator tool.
                        </TableCell>

                        <TableCell>
                            <Code text="string" language="csharp" />
                        </TableCell>

                        <TableCell>
                            <Code text={`"Migrator"`} language="csharp" />
                        </TableCell>
                    </TableRow>

                    <TableRow>
                        <TableCell className="font-semibold">
                            HomeTitle
                        </TableCell>

                        <TableCell>
                            Title that appears on the home page.
                        </TableCell>

                        <TableCell>
                            <Code text="string" language="csharp" />
                        </TableCell>

                        <TableCell>
                            <Code text={`"Home"`} language="csharp" />
                        </TableCell>
                    </TableRow>

                    <TableRow>
                        <TableCell className="font-semibold">
                            HomeText
                        </TableCell>

                        <TableCell>
                            Text that appears on the home page below the title.
                        </TableCell>

                        <TableCell>
                            <Code text="string" language="csharp" />
                        </TableCell>

                        <TableCell>
                            <i className="text-muted-foreground">
                                Too long to display
                            </i>
                        </TableCell>
                    </TableRow>

                    <TableRow>
                        <TableCell className="font-semibold">
                            ShowMigrations
                        </TableCell>

                        <TableCell>
                            <Code text="true" language="csharp" /> if the tool
                            should display the page for managing migrations
                            generated with CLI,{" "}
                            <Code text="false" language="csharp" /> otherwise.
                        </TableCell>

                        <TableCell>
                            <Code text="bool" language="csharp" />
                        </TableCell>

                        <TableCell>
                            <Code text="true" language="csharp" />
                        </TableCell>
                    </TableRow>

                    <TableRow>
                        <TableCell className="font-semibold">
                            ShowLiveMigration
                        </TableCell>

                        <TableCell>
                            <Code text="true" language="csharp" /> if the tool
                            should display the page for generating and running
                            live migrations,{" "}
                            <Code text="false" language="csharp" /> otherwise.
                        </TableCell>

                        <TableCell>
                            <Code text="bool" language="csharp" />
                        </TableCell>

                        <TableCell>
                            <Code text="true" language="csharp" />
                        </TableCell>
                    </TableRow>

                    <TableRow>
                        <TableCell className="font-semibold">
                            RestrictToRoles
                        </TableCell>

                        <TableCell>
                            Roles that are allowed to access the UI for
                            migrations management. Ignored if{" "}
                            <Code
                                text="AuthorizationMethod"
                                language="csharp"
                            />{" "}
                            is specified. Either{" "}
                            <Code text="RestrictToRoles" language="csharp" /> or{" "}
                            <Code
                                text="AuthorizationMethod"
                                language="csharp"
                            />{" "}
                            need to be specified in order to access the
                            migrations management UI in non-development
                            environment.
                        </TableCell>

                        <TableCell>
                            <Code
                                text="IEnumerable<string>?"
                                language="csharp"
                            />
                        </TableCell>

                        <TableCell>
                            <Code text="null" language="csharp" />
                        </TableCell>
                    </TableRow>

                    <TableRow>
                        <TableCell className="font-semibold">
                            AuthorizationMethod
                        </TableCell>

                        <TableCell>
                            Custom method for authorizing the migrations
                            management UI. Either{" "}
                            <Code text="RestrictToRoles" language="csharp" /> or{" "}
                            <Code
                                text="AuthorizationMethod"
                                language="csharp"
                            />{" "}
                            need to be specified in order to access the
                            migrations management UI in non-development
                            environment.
                        </TableCell>

                        <TableCell>
                            <Code
                                text="Func<HttpContext, Task<bool>>?"
                                language="csharp"
                            />
                        </TableCell>

                        <TableCell>
                            <Code text="null" language="csharp" />
                        </TableCell>
                    </TableRow>

                    <TableRow>
                        <TableCell className="font-semibold">
                            ShouldIgnoreColumnOrderForLiveMigrations
                        </TableCell>

                        <TableCell>
                            <Code text="true" language="csharp" /> if the tool
                            should ignore column order when generating live
                            migrations, <Code text="false" language="csharp" />{" "}
                            otherwise.
                        </TableCell>

                        <TableCell>
                            <Code text="bool" language="csharp" />
                        </TableCell>

                        <TableCell>
                            <Code text="null" language="csharp" />
                        </TableCell>
                    </TableRow>

                    <TableRow>
                        <TableCell className="font-semibold">
                            GetMigrationOperations
                        </TableCell>

                        <TableCell>
                            Method that is applied before the collection of{" "}
                            <Code text="MigrationOperation" language="csharp" />{" "}
                            is converted to the collection of{" "}
                            <Code text="MigrationCommand" language="csharp" />.
                        </TableCell>

                        <TableCell>
                            <i className="text-muted-foreground">
                                Too long to display
                            </i>
                        </TableCell>

                        <TableCell>
                            <Code text="null" language="csharp" />
                        </TableCell>
                    </TableRow>

                    <TableRow>
                        <TableCell className="font-semibold">
                            LiveMigrationTables
                        </TableCell>

                        <TableCell>
                            Tables to include in generating the live database
                            model in live migration. If null or empty, all
                            tables are included.
                        </TableCell>

                        <TableCell>
                            <Code
                                text="IEnumerable<string>"
                                language="csharp"
                            />
                        </TableCell>

                        <TableCell>
                            <Code text="null" language="csharp" />
                        </TableCell>
                    </TableRow>

                    <TableRow>
                        <TableCell className="font-semibold">
                            LiveMigrationSchemas
                        </TableCell>

                        <TableCell>
                            Schemas to include in generating the live database
                            model in live migration. If null or empty, all
                            schemas are included.
                        </TableCell>

                        <TableCell>
                            <Code
                                text="IEnumerable<string>"
                                language="csharp"
                            />
                        </TableCell>

                        <TableCell>
                            <Code text="null" language="csharp" />
                        </TableCell>
                    </TableRow>
                </TableBody>
            </Table>

            <div className="flex justify-between mt-16">
                <Button variant="outline" className="self-end" asChild>
                    <Link href="/efcore-migrator/setup">
                        <ChevronLeft className="mr-2 h-4 w-4" /> Setup
                    </Link>
                </Button>

                <div />
            </div>
        </div>
    );
}
