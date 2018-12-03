import * as React from 'react';
import classnames from 'classnames';
import Typography from '@material-ui/core/Typography';
import { WithStyles, createStyles, Theme, withStyles } from '@material-ui/core';
import Paper from '@material-ui/core/Paper';
import HelperText from './HelperText';

const styles = (theme: Theme) =>
  createStyles({
    paper: {
      backgroundColor: 'inherit',
    },
    title: {
      fontSize: '14px',
      fontWeight: 'normal',
      color: theme.palette.grey[700],
    },
  });

type Props = {
  value: string;
  helperText?: string;
  className?: string;
};

const RegularCell: React.SFC<Props & WithStyles<typeof styles>> = props => (
  <Paper
    elevation={0}
    className={classnames(props.classes.paper, props.className)}
  >
    <Typography className={props.classes.title} variant="title" component="p">
      {props.value}
    </Typography>
    {props.helperText && <HelperText helperText={props.helperText} />}
  </Paper>
);

export default withStyles(styles)(RegularCell);
