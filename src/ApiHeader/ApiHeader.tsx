import * as React from 'react';
import Typography from '@material-ui/core/Typography';
import { WithStyles, createStyles, Theme, withStyles } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';

const styles = (theme: Theme) =>
  createStyles({
    container: {
      paddingTop: 15,
      paddingBottom: 15,
    },
    apiKeys: {
      fontWeight: 'bold',
      color: theme.palette.grey[900],
    },
    addNew: {
      borderRadius: 0,
      textTransform: 'initial',
      boxShadow: 'initial',
      color: 'white',
      backgroundColor: '#2a5fed',
      padding: 10,
      fontSize: 14,
    },
  });

type Props = {
  onClick(): void;
};

const ApiHeader: React.SFC<Props & WithStyles<typeof styles>> = props => (
  <Grid
    classes={{ container: props.classes.container }}
    container={true}
    alignItems="center"
  >
    <Grid item={true} xs={1}>
      <Typography classes={{ h5: props.classes.apiKeys }} variant="h5">
        API Keys
      </Typography>
    </Grid>
    <Grid item={true} xs={1}>
      <Button
        onClick={props.onClick}
        classes={{ root: props.classes.addNew }}
        variant="contained"
      >
        New Key
      </Button>
    </Grid>
  </Grid>
);

export default withStyles(styles)(ApiHeader);
