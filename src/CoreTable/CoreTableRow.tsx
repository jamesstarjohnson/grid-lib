import * as React from 'react';
import TableRow, { TableRowProps } from '@material-ui/core/TableRow';
import { createStyles, Theme, withStyles } from '@material-ui/core';

const styles = (theme: Theme) =>
  createStyles({
    root: {
      height: 70,
      '&$selected': {
        backgroundColor: '#e5f2fe',
      },
      '&$hover:hover': {
        backgroundColor: theme.palette.grey[100],
      },
    },
    hover: {},
    selected: {},
  });

const CoreTableRow: React.SFC<TableRowProps> = props => <TableRow {...props} />;

export default withStyles(styles)(CoreTableRow);
