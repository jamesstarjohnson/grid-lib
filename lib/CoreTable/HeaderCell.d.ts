import * as React from 'react';
declare type Props = {
    sort?: 'ASC' | 'DESC' | undefined;
    onClick?(): void;
    sortable: boolean;
    header?: React.ReactNode;
    name: React.ReactNode;
};
declare const _default: React.ComponentType<Pick<Props & {
    classes: Record<"text" | "container" | "sortable" | "arrow", string>;
    innerRef?: ((instance: any) => void) | React.RefObject<any> | null | undefined;
} & {
    children?: React.ReactNode;
}, "header" | "children" | "name" | "onClick" | "sortable" | "sort"> & import("@material-ui/core").StyledComponentProps<"text" | "container" | "sortable" | "arrow">>;
export default _default;
