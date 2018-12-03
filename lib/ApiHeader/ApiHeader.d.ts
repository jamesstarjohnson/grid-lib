import * as React from 'react';
declare type Props = {
    onClick(): void;
};
declare const _default: React.ComponentType<Pick<Props & {
    classes: Record<"container" | "apiKeys" | "addNew", string>;
    innerRef?: ((instance: any) => void) | React.RefObject<any> | null | undefined;
} & {
    children?: React.ReactNode;
}, "children" | "onClick"> & import("@material-ui/core").StyledComponentProps<"container" | "apiKeys" | "addNew">>;
export default _default;
