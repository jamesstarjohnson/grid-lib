import * as React from 'react';
import { TableRowClassKey } from '@material-ui/core/TableRow';
declare type CoreTableRowProps = {
    hover: boolean;
    className?: string;
    index: number;
    selected: boolean;
    onSelect(index: number): void;
    classes: Partial<Record<TableRowClassKey, string>>;
};
export { CoreTableRowProps };
declare const _default: React.ComponentType<Pick<CoreTableRowProps & {
    children?: React.ReactNode;
}, "children" | "index" | "className" | "onSelect" | "selected" | "hover"> & import("@material-ui/core").StyledComponentProps<TableRowClassKey>>;
export default _default;
