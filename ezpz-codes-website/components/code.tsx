"use client";

import { Code as RealCode, atomOneLight, atomOneDark } from "react-code-blocks";
import { useTheme } from "next-themes";

export interface ICodeProps {
    language: string;
    text: string;
}

export default function Code(props: ICodeProps) {
    const { theme, systemTheme } = useTheme();

    const isLightTheme =
        theme === "light" || (theme === "system" && systemTheme === "light");

    const codeProps: any = {
        text: props.text,
        language: props.language,
        theme: isLightTheme ? atomOneLight : atomOneDark,
    };

    return <RealCode {...codeProps}>{props.text}</RealCode>;
}
