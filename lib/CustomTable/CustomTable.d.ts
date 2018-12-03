import * as React from 'react';
import { CoreTableProps, Column } from '../CoreTable';
import { Data } from './index';
import { Sort } from '../CoreTable';
declare type Props = {
    data: Data[];
    multiselect?: boolean;
} & Pick<CoreTableProps<Data>, 'data' | 'actionsRenderer'>;
declare type State = {
    sort: Sort<Data> | undefined;
    searchValue: string | undefined;
    selectedRows: Record<number, boolean>;
    columns: Array<Column<Data>>;
};
declare class CustomTable extends React.Component<Props, State> {
    constructor(props: Props);
    renderName: (data: Data) => JSX.Element;
    renderKey: (data: Data) => JSX.Element;
    renderDate: (data: Data) => JSX.Element;
    renderAcl: (data: Data) => JSX.Element;
    renderHeaderCell: (col: Column<Data>) => JSX.Element;
    handleSearch: (value: string | undefined) => void;
    renderTableActions: () => JSX.Element;
    handleChange: (sort: Sort<Data> | undefined, selectedRows: Record<number, boolean>, columns: Column<Data>[]) => void;
    render(): JSX.Element;
}
export default CustomTable;
