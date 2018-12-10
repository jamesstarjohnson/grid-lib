import * as React from 'react';
import TableBody from '@material-ui/core/TableBody';
import TableHead from '@material-ui/core/TableHead';
import TableRow, { TableRowProps } from '@material-ui/core/TableRow';

import StyledTable from './StyledTable';
import CoreTableCell from './CoreTableCell';
import HeaderCell from './HeaderCell';

export type Column<T> = {
  header?: string;
  sortable: boolean;
  name: string;
  render: (data: T, selected?: boolean) => JSX.Element;
  display?: boolean;
  renderHeaderCell?: (col: Column<T>) => JSX.Element;
};

type ActionColumn<T> = {
  action?: true;
} & Column<T>;

export type Sort<T> = {
  value: 'ASC' | 'DESC';
  name: keyof T;
};

export type CoreTableProps<T> = {
  onSort?(name: keyof T): void;
  columns: Array<Column<T>>;
  data: Array<T>;
  rowActionsRenderer?(value: T, selected?: boolean): JSX.Element;
  sort?: Sort<T>;
  selectedRows: Record<number, boolean>;
  onSelect(index: number): void;
  rowComponent?: React.ComponentType<TableRowProps>;
};

class CoreTable<T> extends React.Component<CoreTableProps<T>> {
  get columns(): Array<ActionColumn<T>> {
    return this.props.rowActionsRenderer
      ? [
          ...this.props.columns,
          {
            action: true,
            name: '',
            render: this.props.rowActionsRenderer,
            sortable: false,
          },
        ]
      : this.props.columns;
  }

  handleHeaderCellClick = (name: keyof T) => () => {
    if (this.props.onSort) {
      this.props.onSort(name);
    }
  };

  getHeaderSort = (name: keyof T) => {
    if (this.props.sort && this.props.sort.name === name) {
      return this.props.sort.value;
    }
    return undefined;
  };

  renderDefaultHeaderCell = (col: Column<T>) => (
    <HeaderCell
      sortable={col.sortable}
      sort={this.getHeaderSort(col.name as keyof T)}
      onClick={this.handleHeaderCellClick(col.name as keyof T)}
      name={col.name}
      header={col.header}
    />
  );

  handleSelect = (i: number) => () => {
    this.props.onSelect(i);
  };

  render() {
    const { data, rowComponent } = this.props;
    const ComponentTableRow = rowComponent || TableRow;
    return (
      <StyledTable>
        <TableHead>
          <TableRow>
            {this.columns.map((col, i) => (
              <CoreTableCell key={i}>
                {col.renderHeaderCell
                  ? col.renderHeaderCell(col)
                  : this.renderDefaultHeaderCell(col)}
              </CoreTableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row, i) => (
            <ComponentTableRow
              hover={true}
              key={i}
              selected={this.props.selectedRows[i]}
              onClick={this.handleSelect(i)}
            >
              {this.columns.map((col, colIndex) => (
                <CoreTableCell key={colIndex} action={col.action}>
                  {col.render(row, this.props.selectedRows[i])}
                </CoreTableCell>
              ))}
            </ComponentTableRow>
          ))}
        </TableBody>
      </StyledTable>
    );
  }
}

export default CoreTable;
