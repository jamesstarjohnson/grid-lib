import * as React from 'react';
import TableRow, { TableRowProps } from '@material-ui/core/TableRow';
import { createStyles, withStyles } from '@material-ui/core';

const styles = () =>
  createStyles({
    root: {
      height: 70,
      '&$selected': {
        backgroundColor: '#e5f2fe !important',
      },
    },
    selected: {},
  });

const CoreTableRow: React.SFC<TableRowProps> = props => <TableRow {...props} />;

export default withStyles(styles)(CoreTableRow);
