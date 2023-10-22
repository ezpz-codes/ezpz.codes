import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import MigrationsImage from "./Migrations.png";
import MigrationImage from "./Migration.png";
import LiveMigrationImage from "./LiveMigration.png";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function EntityFrameworkCoreMigratorAspNetCore() {
    return (
        <div>
            <h2 className="text-3xl font-semibold">Home</h2>

            <p className="mt-8">
                With EntityFrameworkCore.Migrator.AspNetCore you can manage your
                Entity Framework Core (EF Core) migrations with a nice UI in you
                ASP.NET Core application.
            </p>

            <h3 className="text-xl font-semibold mt-10">
                Migration management
            </h3>

            <p className="mt-2">
                You can manage the migration created through .NET CLI or Package
                Manager Console with the provided UI. The tool generates SQL
                that would executed on the database before running the migration
                so you can make sure everything is as expected.
            </p>

            <Image
                src={MigrationsImage}
                alt="List of migrations"
                className="mt-4 rounded-sm"
            />

            <Image
                src={MigrationImage}
                alt="Migration"
                className="mt-4 rounded-sm"
            />

            <h3 className="text-xl font-semibold mt-10">Live migration</h3>

            <p className="mt-2">
                You can also generate and run SQL script that automatically
                migrate your database from the current state to the state you
                have in your code, without the need for any migrations. You can
                also modify all the migration operations generated by EF Core
                before generating the commands.
            </p>

            <Image
                src={LiveMigrationImage}
                alt="Live migration"
                className="mt-4 rounded-sm"
            />

            <div className="flex justify-between mt-16">
                <div />

                <Button variant="outline" className="self-end" asChild>
                    <Link href="/efcore-migrator/setup">
                        Setup <ChevronRight className="ml-2 h-4 w-4" />
                    </Link>
                </Button>
            </div>
        </div>
    );
}
