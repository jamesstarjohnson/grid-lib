import * as React from 'react';
import classnames from 'classnames';
import { WithStyles, createStyles, Theme, withStyles } from '@material-ui/core';

const styles = (theme: Theme) =>
  createStyles({
    action: {
      borderRadius: 0,
      boxSizing: 'border-box',
      height: 40,
      border: `1px solid ${theme.palette.grey[300]}`,
    },
  });

type Props = WithStyles<typeof styles>;

const TableAction: React.SFC<Props> = props => {
  const child = React.Children.only(props.children);
  const nextChild = React.cloneElement(child, {
    className: classnames(child.props.className, props.classes.action),
  });
  return <React.Fragment>{nextChild}</React.Fragment>;
};

export default withStyles(styles)(TableAction);
