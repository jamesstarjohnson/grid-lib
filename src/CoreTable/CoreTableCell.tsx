import * as React from 'react';
import classnames from 'classnames';
import TableCell, { TableCellProps } from '@material-ui/core/TableCell';
import { createStyles, Theme, withStyles, WithStyles } from '@material-ui/core';

const styles = (theme: Theme) =>
  createStyles({
    root: {
      borderBottom: `1px solid ${theme.palette.grey[300]}`,
      paddingRight: 0,
    },
    action: {
      textAlign: 'right',
    },
  });

const CoreTableRow: React.SFC<
  TableCellProps & { action?: boolean } & WithStyles<typeof styles>
> = ({ classes, action, ...other }) => (
  <TableCell
    className={classnames(classes.root, { [classes.action]: action })}
    {...other}
  />
);

export default withStyles(styles)(CoreTableRow);
