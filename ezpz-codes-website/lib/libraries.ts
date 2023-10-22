export enum Category {
    DotNet = ".NET",
    React = "React",
}

export interface ILibraryDescriptor {
    title: string;
    description: string;
    url?: string;
    cta?: string;
    isComingSoon?: boolean;
    categories: Category[];
}

export const libraries: ILibraryDescriptor[] = [
    {
        title: "EntityFrameworkCore.Migrator.AspNetCore",
        description:
            "Tool that provides you a UI to make your EF Core migration management a little bit easier.",
        url: "/efcore-migrator",
        categories: [Category.DotNet],
    },
    {
        title: "Serilog.Viewer",
        description:
            "Extendable tool that allows you to view and filter through Serilog logs, no matter the provider/sink.",
        categories: [Category.DotNet],
        isComingSoon: true,
    },
];
