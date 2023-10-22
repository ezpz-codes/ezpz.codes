"use client";

import { CopyBlock, atomOneLight, atomOneDark } from "react-code-blocks";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import { DetailedHTMLProps, HTMLAttributes, useEffect } from "react";
import { useTheme } from "next-themes";

export interface ICodeInfo {
    language: string;
    text: string;
}

export interface ICodeBlockProps
    extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    code?: ICodeInfo;
    codesTabs?: Record<string, ICodeInfo>;
}

export default function CodeBlock({
    code,
    codesTabs,
    ...rest
}: ICodeBlockProps) {
    const { theme, systemTheme } = useTheme();

    const isLightTheme =
        theme === "light" || (theme === "system" && systemTheme === "light");

    if (code) {
        const codeBlockProps: any = {
            text: code.text,
            language: code.language,
            startingLineNumber: 1,
            wrapLongLines: false,
            theme: isLightTheme ? atomOneLight : atomOneDark,
            showLineNumbers: false,
            codeBlock: true,
        };

        return (
            <div {...rest}>
                <CopyBlock {...codeBlockProps} />
            </div>
        );
    }

    if (codesTabs && Object.keys(codesTabs).length > 0) {
        const tabs = Object.keys(codesTabs);

        return (
            <div {...rest}>
                <Tabs defaultValue={tabs[0]}>
                    <TabsList>
                        {tabs.map((x) => {
                            return (
                                <TabsTrigger key={x} value={x}>
                                    {x}
                                </TabsTrigger>
                            );
                        })}
                    </TabsList>

                    {tabs.map((x) => {
                        const codeBlockProps: any = {
                            text: codesTabs![x].text,
                            language: codesTabs![x].language,
                            startingLineNumber: 1,
                            wrapLongLines: false,
                            theme: isLightTheme ? atomOneLight : atomOneDark,
                            showLineNumbers: false,
                            codeBlock: true,
                        };

                        return (
                            <TabsContent key={x} value={x}>
                                <CopyBlock {...codeBlockProps} />
                            </TabsContent>
                        );
                    })}
                </Tabs>
            </div>
        );
    }

    return null;
}
