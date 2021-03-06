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
  multiselect?: boolean;
  tableActionsRenderer?(): JSX.Element;
  filtersRenderer?(): JSX.Element;
  onSort(sort: Sort<T>): void;
  onRowSelect(selectedRows: Record<number, boolean>): void;
  onColumnChange(columns: Column<T>[]): void;
} & Pick<
  CoreTableProps<T>,
  Exclude<keyof CoreTableProps<T>, 'onSort' | 'onSelect'>
>;

class SmartTable<T> extends React.Component<Props<T>> {
  handleSort = (name: keyof T) => {
    let sortValue: 'ASC' | 'DESC' = 'ASC';

    const { sort } = this.props;

    if (!sort) {
      sortValue = 'ASC';
    } else if (sort.name === name && sort.value === 'ASC') {
      sortValue = 'DESC';
    } else if (sort.name === name && sort.value === 'DESC') {
      sortValue = 'ASC';
    }
    this.props.onSort({ name, value: sortValue });
  };

  handleColumnChange = (columnsChecked: Record<keyof T, boolean>) => {
    const columns = this.props.columns.map(c => ({
      ...c,
      display: columnsChecked[c.header],
    }));
    this.props.onColumnChange(columns);
  };

  getColumns = memoize((columns: Array<Column<T>>) =>
    columns.filter(c => !!c.display),
  );

  handleSelect = (index: number) => {
    const { multiselect } = this.props;

    const seletedRow = {
      [index]: !this.props.selectedRows[index],
    };

    const selectedRows = multiselect
      ? {
          ...this.props.selectedRows,
          ...seletedRow,
        }
      : seletedRow;

    this.props.onRowSelect(selectedRows);
  };

  getColumnsChecked = memoize((columns: Array<Column<T>>) => {
    return columns.reduce((acc, next) => {
      acc[next.header] = !!next.display;
      return acc;
    }, {}) as Record<keyof T, boolean>;
  });

  getTableActionsContainerStyle = () =>
    this.props.filtersRenderer ? { minWidth: '80%' } : { width: '100%' };

  render() {
    return (
      <div style={{ display: 'flex' }}>
        <div style={this.getTableActionsContainerStyle()}>
          <TableActions>
            {this.props.tableActionsRenderer &&
              this.props.tableActionsRenderer()}
            <ColumnSelector
              columnsChecked={this.getColumnsChecked(this.props.columns)}
              onChange={this.handleColumnChange}
            />
          </TableActions>
          <div style={{ overflowX: 'auto', height: 'calc(100vh - 160px)' }}>
            <CoreTable
              sort={this.props.sort}
              onSelect={this.handleSelect}
              selectedRows={this.props.selectedRows}
              onSort={this.handleSort}
              data={this.props.data}
              columns={this.getColumns(this.props.columns)}
              rowActionsRenderer={this.props.rowActionsRenderer}
              rowComponent={this.props.rowComponent}
            />
          </div>
        </div>
        {this.props.filtersRenderer && (
          <div
            style={{
              paddingTop: 60,
              paddingRight: 15,
              paddingLeft: 15,
              width: '100%',
            }}
          >
            {this.props.filtersRenderer()}
          </div>
        )}
      </div>
    );
  }
}

export default SmartTable;
