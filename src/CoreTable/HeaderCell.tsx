import * as React from 'react';
import classnames from 'classnames';
import Typography from '@material-ui/core/Typography';
import { WithStyles, createStyles, Theme, withStyles } from '@material-ui/core';
import ArrowDownward from '@material-ui/icons/ArrowDownward';
import ArrowUpward from '@material-ui/icons/ArrowUpward';

const styles = (theme: Theme) =>
  createStyles({
    container: {
      display: 'inline-flex',
      alignItems: 'center',
    },
    sortable: {
      cursor: 'pointer',
    },
    text: {
      color: 'black',
      fontSize: 14,
      fontWeight: 'bold',
    },
    arrow: {
      transform: 'scale(0.7)',
      fill: 'black',
    },
  });

type Props = {
  sort?: 'ASC' | 'DESC' | undefined;
  onClick?(): void;
  sortable: boolean;
  header?: React.ReactNode;
  name: React.ReactNode;
};

const HeaderCell: React.SFC<Props & WithStyles<typeof styles>> = props => (
  <div
    onClick={props.sortable ? props.onClick : () => undefined}
    className={classnames(props.classes.container, {
      [props.classes.sortable]: props.sortable,
    })}
  >
    <Typography className={props.classes.text} component="p">
      {props.header ? props.header : props.name}
    </Typography>
    {props.sort && props.sort === 'ASC' && (
      <ArrowUpward className={props.classes.arrow} />
    )}
    {props.sort && props.sort === 'DESC' && (
      <ArrowDownward className={props.classes.arrow} />
    )}
  </div>
);

export default withStyles(styles)(HeaderCell);
