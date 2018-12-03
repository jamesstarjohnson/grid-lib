import * as React from 'react';
import TableBody from '@material-ui/core/TableBody';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

import StyledTable from './StyledTable';
import StyledTableCell from './StyledTableCell';
import HeaderCell from './HeaderCell';
import CoreTableRow, { CoreTableRowProps } from './CoreTableRow';

export type Column<T> = {
  header?: string;
  sortable: boolean;
  name: string;
  render: (data: T, selected?: boolean) => JSX.Element;
  display?: boolean;
  renderHeaderCell?: (col: Column<T>) => JSX.Element;
};

type Data<T> = T & {
  helperText?: Partial<Record<keyof T, string>>;
};

export type Sort<T> = {
  value: 'ASC' | 'DESC';
  name: keyof T;
};

export type CoreTableProps<T> = {
  onSort?(name: keyof T): void;
  columns: Array<Column<T>>;
  data: Array<Data<T>>;
  actionsRenderer?(value: Data<T>, selected?: boolean): JSX.Element;
  sort?: Sort<T>;
  selectedRows: Record<number, boolean>;
  onSelect(index: number): void;
  component?: React.ComponentType<CoreTableRowProps>;
};

class CoreTable<T> extends React.Component<CoreTableProps<T>> {
  get columns(): Array<Column<T>> {
    return this.props.actionsRenderer
      ? [
          ...this.props.columns,
          {
            name: '',
            render: this.props.actionsRenderer,
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

  render() {
    const { data } = this.props;
    return (
      <StyledTable>
        <TableHead>
          <TableRow>
            {this.columns.map((col, i) => (
              <StyledTableCell key={i}>
                {col.renderHeaderCell
                  ? col.renderHeaderCell(col)
                  : this.renderDefaultHeaderCell(col)}
              </StyledTableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row, i) => (
            <CoreTableRow
              hover={true}
              key={i}
              index={i}
              selected={this.props.selectedRows[i]}
              onSelect={this.props.onSelect}
            >
              {this.columns.map((col, colIndex) => (
                <StyledTableCell key={colIndex}>
                  {col.render(row, this.props.selectedRows[i])}
                </StyledTableCell>
              ))}
            </CoreTableRow>
          ))}
        </TableBody>
      </StyledTable>
    );
  }
}

export default CoreTable;
