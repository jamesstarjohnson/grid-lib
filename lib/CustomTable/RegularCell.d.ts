import * as React from 'react';
declare type Props = {
    value: string;
    helperText?: string;
    className?: string;
};
declare const _default: React.ComponentType<Pick<Props & {
    classes: Record<"title" | "paper", string>;
    innerRef?: ((instance: any) => void) | React.RefObject<any> | null | undefined;
} & {
    children?: React.ReactNode;
}, "children" | "className" | "value" | "helperText"> & import("@material-ui/core").StyledComponentProps<"title" | "paper">>;
export default _default;
