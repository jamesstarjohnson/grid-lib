import * as React from 'react';

import RegularCell from './RegularCell';
import { CoreTableProps, Column } from '../CoreTable';
import { Data } from './index';
import Label from './Label';
import KeyCell from './KeyCell';
import SearchField from '../SearchField';
import SmartTable from '../SmartTable';
import { Sort } from '../CoreTable';

type Props = {
  data: Data[];
  multiselect?: boolean;
} & Pick<CoreTableProps<Data>, 'data' | 'actionsRenderer'>;

type State = {
  sort: Sort<Data> | undefined;
  searchValue: string | undefined;
  selectedRows: Record<number, boolean>;
  columns: Array<Column<Data>>;
};

class CustomTable extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      sort: undefined,
      searchValue: undefined,
      selectedRows: {},
      columns: [
        {
          header: 'Name1',
          name: 'Name',
          render: this.renderName,
          sortable: true,
          display: true,
        },
        {
          header: 'Key',
          name: 'Key',
          render: this.renderKey,
          renderHeaderCell: this.renderHeaderCell,
          sortable: false,
          display: true,
        },
        {
          header: 'ACL',
          name: 'ACL',
          render: this.renderAcl,
          renderHeaderCell: this.renderHeaderCell,
          sortable: false,
          display: true,
        },
        {
          header: 'Last Modified',
          name: 'Last Modified',
          render: this.renderDate,
          renderHeaderCell: this.renderHeaderCell,
          sortable: true,
          display: true,
        },
      ],
    };
  }
  renderName = (data: Data) => (
    <RegularCell
      value={data.name}
      helperText={data.helperText && data.helperText.name}
    />
  );
  renderKey = (data: Data) => <KeyCell value={data.key} />;
  renderDate = (data: Data) => (
    <RegularCell
      value={data.created.toDateString()}
      helperText={data.helperText && data.helperText.created}
    />
  );
  renderAcl = (data: Data) => {
    return (
      <div>
        {data.acl.map((item, i) => (
          <Label key={i} kind={item} />
        ))}
      </div>
    );
  };

  renderHeaderCell = (col: Column<Data>) => {
    return <span>{col.header}</span>;
  };

  handleSearch = (value: string | undefined) => {
    this.setState({ searchValue: value });
  };

  renderTableActions = () => {
    return (
      <SearchField
        searchValue={this.state.searchValue}
        onChange={this.handleSearch}
      />
    );
  };

  handleChange = (
    sort: Sort<Data> | undefined,
    selectedRows: Record<number, boolean>,
    columns: Array<Column<Data>>,
  ) => {
    this.setState({
      sort,
      selectedRows,
      columns,
    });
  };

  render() {
    return (
      <SmartTable
        sort={this.state.sort}
        selectedRows={this.state.selectedRows}
        data={this.props.data}
        columns={this.state.columns}
        multiselect={this.props.multiselect}
        onChange={this.handleChange}
        tableActionsRenderer={this.renderTableActions}
        actionsRenderer={this.props.actionsRenderer}
      />
    );
  }
}

export default CustomTable;
