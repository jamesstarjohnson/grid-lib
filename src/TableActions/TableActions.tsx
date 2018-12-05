import * as React from 'react';
import { WithStyles, createStyles, Theme, withStyles } from '@material-ui/core';

const styles = (theme: Theme) =>
  createStyles({
    container: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      height: 60,
    },
  });

type Props = WithStyles<typeof styles>;

const TableActions: React.SFC<Props> = props => {
  const { classes, children } = props;
  return <div className={classes.container}>{children}</div>;
};

export default withStyles(styles)(TableActions);
