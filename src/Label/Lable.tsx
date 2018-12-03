import * as React from 'react';
import Typography from '@material-ui/core/Typography';
import classnames from 'classnames';
import { WithStyles, createStyles, Theme, withStyles } from '@material-ui/core';
import Paper from '@material-ui/core/Paper';

const styles = (theme: Theme) =>
  createStyles({
    paper: {
      borderRadius: 0,
      color: 'white',
      display: 'inline-flex',
      padding: 5,
      margin: 2,
    },
    personalization: {
      backgroundColor: '#563eb2',
    },
    feed: {
      backgroundColor: '#538886',
    },
    userData: {
      backgroundColor: '#e45a74',
    },
    title: {
      fontSize: '11px',
      fontWeight: 200,
      color: 'white',
    },
  });

export type LabelKind = 'Personalization' | 'Feed' | 'User Data';

type LabelProps = {
  kind: LabelKind;
};

type Props = LabelProps & WithStyles<typeof styles>;

const Lable: React.SFC<Props> = props => {
  const { classes, kind } = props;
  const className = classnames(classes.paper, {
    [classes.personalization]: kind === 'Personalization',
    [classes.feed]: kind === 'Feed',
    [classes.userData]: kind === 'User Data',
  });
  return (
    <Paper elevation={0} className={className}>
      <Typography
        classes={{ title: props.classes.title }}
        variant="title"
        component="p"
      >
        {kind}
      </Typography>
    </Paper>
  );
};

export default withStyles(styles)(Lable);
