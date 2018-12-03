import * as React from 'react';
declare type Props = {
    onSearch(value: string): void;
};
declare const _default: React.ComponentType<Pick<Props & {
    classes: Record<"input" | "icon" | "container", string>;
    innerRef?: ((instance: any) => void) | React.RefObject<any> | null | undefined;
}, "onSearch"> & import("@material-ui/core").StyledComponentProps<"input" | "icon" | "container">>;
export default _default;
