import * as React from 'react';
import { WithStyles, createStyles, Theme, withStyles } from '@material-ui/core';
import SvgIcon, { SvgIconProps } from '@material-ui/core/SvgIcon';

const styles = (theme: Theme) =>
  createStyles({
    root: {
      width: 20,
      height: 20,
    },
    color: {
      fill: theme.palette.grey[500],
    },
  });

const CopyToClipboardIcon: React.SFC<
  SvgIconProps & WithStyles<typeof styles>
> = props => {
  const { classes, ...other } = props;
  return (
    <SvgIcon classes={{ root: classes.root }} {...other}>
      <path
        className={classes.color}
        d="M19,21H8V7H19M19,5H8A2,2 0 0,0 6,7V21A2,2 0 0,0 8,23H19A2,2 0 0,0 21,21V7A2,2 0 0,0 19,5M16,1H4A2,2 0 0,0 2,3V17H4V3H16V1Z"
      />
    </SvgIcon>
  );
};

export default withStyles(styles)(CopyToClipboardIcon);
