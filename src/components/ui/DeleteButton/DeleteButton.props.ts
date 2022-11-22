import {ButtonHTMLAttributes, DetailedHTMLProps, ReactNode} from "react";

export interface DeleteButtonProps extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
    initialText: string
    finallyText: string
    size: 'small' | 'middle' | 'big'
    color: 'purple' | 'red'
}