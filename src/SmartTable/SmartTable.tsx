import * as React from 'react';

import { memoize } from 'lodash';
import CoreTable, { CoreTableProps, Column } from '../CoreTable';
import ColumnSelector from '../ColumnsSelector';
import TableActions from '../TableActions';

export type Sort<T> = {
  value: 'ASC' | 'DESC';
  name: keyof T;
};

type Props<T> = {
  data: T[];
  multiselect?: boolean;
  tableActionsRenderer(): JSX.Element;
  onChange(
    sort: Sort<T> | undefined,
    selectedRows: Record<number, boolean>,
    columns: Array<Column<T>>,
  ): void;
} & Pick<
  CoreTableProps<T>,
  Exclude<keyof CoreTableProps<T>, 'onSort' | 'onSelect'>
>;

class SmartTable<T> extends React.Component<Props<T>> {
  handleSort = (name: keyof T) => {
    const { selectedRows, columns } = this.props;
    let sortValue!: Sort<T>;
    const { sort } = this.props;
    if (!sort) {
      sortValue = { name, value: 'ASC' };
    } else if (sort.name === name && sort.value === 'ASC') {
      sortValue = { name, value: 'DESC' };
    } else if (sort.name === name && sort.value === 'DESC') {
      sortValue = { name, value: 'ASC' };
    } else if (sort.name !== name) {
      sortValue = { name, value: 'ASC' };
    }
    this.props.onChange(sortValue, selectedRows, columns);
  };

  handleColumnChange = (columnsChecked: Record<keyof T, boolean>) => {
    const { sort, selectedRows } = this.props;
    const columns = this.props.columns.map(c => ({
      ...c,
      display: columnsChecked[c.name],
    }));
    this.props.onChange(sort, selectedRows, columns);
  };

  getColumns = memoize((columns: Array<Column<T>>) =>
    columns.filter(c => !!c.display),
  );

  handleSelect = (index: number) => {
    const { multiselect, sort, columns } = this.props;
    const selectedRows = multiselect
      ? {
          ...this.props.selectedRows,
          [index]: !this.props.selectedRows[index],
        }
      : {
          [index]: !this.props.selectedRows[index],
        };
    this.props.onChange(sort, selectedRows, columns);
  };

  getColumnsChecked = memoize((columns: Array<Column<T>>) => {
    return columns.reduce((acc, next) => {
      acc[next.name] = !!next.display;
      return acc;
    }, {}) as Record<keyof T, boolean>;
  });

  getColumnIds = memoize(
    (columns: Array<Column<T>>) => columns.map(c => c.name) as Array<keyof T>,
  );

  render() {
    return (
      <React.Fragment>
        <TableActions>
          {this.props.tableActionsRenderer()}
          <ColumnSelector
            columnIds={this.getColumnIds(this.props.columns)}
            columnsChecked={this.getColumnsChecked(this.props.columns)}
            onChange={this.handleColumnChange}
          />
        </TableActions>
        <CoreTable
          sort={this.props.sort}
          onSelect={this.handleSelect}
          selectedRows={this.props.selectedRows}
          onSort={this.handleSort}
          data={this.props.data}
          columns={this.getColumns(this.props.columns)}
          actionsRenderer={this.props.actionsRenderer}
        />
      </React.Fragment>
    );
  }
}

export default SmartTable;