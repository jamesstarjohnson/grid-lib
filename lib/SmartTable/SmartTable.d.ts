import * as React from 'react';
import { CoreTableProps, Column } from '../CoreTable';
export declare type Sort<T> = {
    value: 'ASC' | 'DESC';
    name: keyof T;
};
declare type Props<T> = {
    data: T[];
    multiselect?: boolean;
    tableActionsRenderer(): JSX.Element;
    onChange(sort: Sort<T> | undefined, selectedRows: Record<number, boolean>, columns: Array<Column<T>>): void;
} & Pick<CoreTableProps<T>, Exclude<keyof CoreTableProps<T>, 'onSort' | 'onSelect'>>;
declare class SmartTable<T> extends React.Component<Props<T>> {
    handleSort: (name: keyof T) => void;
    handleColumnChange: (columnsChecked: Record<keyof T, boolean>) => void;
    getColumns: ((columns: Column<T>[]) => Column<T>[]) & import("lodash").MemoizedFunction;
    handleSelect: (index: number) => void;
    getColumnsChecked: ((columns: Column<T>[]) => Record<keyof T, boolean>) & import("lodash").MemoizedFunction;
    getColumnIds: ((columns: Column<T>[]) => (keyof T)[]) & import("lodash").MemoizedFunction;
    render(): JSX.Element;
}
export default SmartTable;
