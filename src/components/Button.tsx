import React, { ReactElement } from "react"
import { twMerge } from "tailwind-merge"

interface ButtonInterfaceProps {
    title: string;
    size: "sm" | "md" | "lg" | "xl" | "2xl";
    variant: "primary" | "secondary" | "destructive" | "success" | "info" | "outlined" | "disabled";
    onChange: () => void;
    startIcon?: ReactElement;
    endIcon?: ReactElement;
    children?: ReactElement;
    className?: string;
}
// NOTE: Type for mapping button sizes to their corresponding Tailwind classes
type SizeStyleType = {
    [K in ButtonInterfaceProps["size"]]: string;
};

type VariantStyleType = {
    [K in ButtonInterfaceProps["variant"]]: string;
}

const sizeStyle: SizeStyleType = {
    "sm": "px-2 py-1 text-sm",
    "md": "px-4 py-2 text-md",
    "lg": "px-6 py-3 text-lg",
    "xl": "px-8 py-4 text-xl",
    "2xl": "px-10 py-5 text-2xl",
}

const variantStyle: VariantStyleType = {
    "primary": "bg-blue-500 text-white hover:bg-blue-400",
    "secondary": "bg-gray-500 text-white hover:bg-gray-400",
    "outlined": "border border-gray-500 bg-transparent text-gray-300 hover:bg-gray-400 hover:text-gray-900",
    "destructive": "bg-red-500 text-white hover:bg-red-400",
    "success": "bg-green-500 text-white hover:bg-green-400",
    "info": "bg-amber-500 text-white hover:bg-amber-400",
    "disabled": "bg-gray-300 text-gray-700 cursor-not-allowed",
}


const defaultButtonStyle = "px-2 py-1 text-md bg-blue-500 text-white rounded items-center"

export function Button(props: ButtonInterfaceProps) {
    //NOTE: Merge the default button style with size, variant, and custom classes using twMerge
    // to handle Tailwind class conflicts and duplicates
    const buttonClassesMerge = twMerge(
        defaultButtonStyle,
        sizeStyle[props.size],
        variantStyle[props.variant],
        props.className
    )

    return (
        <>
            {/* NOTE: Old implementation using template literals - kept for reference */}
            {/* <button className={`${sizeStyle[props.size]} ${variantStyle[props.variant]} ${defaultButtonStyle} ${props.className}`} onClick={props.onChange}> */}

            {/* Using twMerge to properly handle Tailwind class conflicts and duplicates */}
            <button className={buttonClassesMerge} onClick={props.onChange}>
                <div className="flex items-center justify-center gap-1">
                    {props.startIcon && <span className="mt-[2px]">{props.startIcon}</span>}
                    <div>{props.title}</div>
                    {props.endIcon && <span className="mt-[2px]">{props.endIcon}</span>}
                </div>
            </button>
        </>
    )
}
