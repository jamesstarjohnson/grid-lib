import * as React from 'react';
import Typography from '@material-ui/core/Typography';
import { WithStyles, createStyles, Theme, withStyles } from '@material-ui/core';

const styles = (theme: Theme) =>
  createStyles({
    subtitle2: {
      fontSize: '13px',
      fontWeight: 300,
      color: theme.palette.grey[500],
    },
  });

type Props = {
  helperText: string;
};

const HelperText: React.SFC<Props & WithStyles<typeof styles>> = props => (
  <Typography classes={props.classes} variant="subtitle2" component="p">
    {props.helperText}
  </Typography>
);

export default withStyles(styles)(HelperText);
