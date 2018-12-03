import * as React from 'react';
declare type Props = {
    onChange(value: string): void;
    searchValue: string | undefined;
    className?: string;
};
declare const _default: React.ComponentType<Pick<Props & {
    classes: Record<"input" | "inputContainer" | "searchIcon", string>;
    innerRef?: ((instance: any) => void) | React.RefObject<any> | null | undefined;
}, "className" | "onChange" | "searchValue"> & import("@material-ui/core").StyledComponentProps<"input" | "inputContainer" | "searchIcon">>;
export default _default;
