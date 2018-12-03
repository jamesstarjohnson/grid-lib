import * as React from 'react';
import { CoreTableRowProps } from './CoreTableRow';
export declare type Column<T> = {
    header?: string;
    sortable: boolean;
    name: string;
    render: (data: T, selected?: boolean) => JSX.Element;
    display?: boolean;
    renderHeaderCell?: (col: Column<T>) => JSX.Element;
};
declare type Data<T> = T & {
    helperText?: Partial<Record<keyof T, string>>;
};
export declare type Sort<T> = {
    value: 'ASC' | 'DESC';
    name: keyof T;
};
export declare type CoreTableProps<T> = {
    onSort?(name: keyof T): void;
    columns: Array<Column<T>>;
    data: Array<Data<T>>;
    actionsRenderer?(value: Data<T>, selected?: boolean): JSX.Element;
    sort?: Sort<T>;
    selectedRows: Record<number, boolean>;
    onSelect(index: number): void;
    component?: React.ComponentType<CoreTableRowProps>;
};
declare class CoreTable<T> extends React.Component<CoreTableProps<T>> {
    readonly columns: Array<Column<T>>;
    handleHeaderCellClick: (name: keyof T) => () => void;
    getHeaderSort: (name: keyof T) => "ASC" | "DESC" | undefined;
    renderDefaultHeaderCell: (col: Column<T>) => JSX.Element;
    render(): JSX.Element;
}
export default CoreTable;
