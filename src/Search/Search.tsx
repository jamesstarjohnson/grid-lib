import * as React from 'react';

import { WithStyles, createStyles, Theme, withStyles } from '@material-ui/core';
import InputBase from '@material-ui/core/InputBase';
import SearchIcon from '@material-ui/icons/Search';

const styles = (theme: Theme) =>
  createStyles({
    icon: {
      padding: '0 18px 0 24px',
      fill: theme.palette.grey[500],
    },
    container: {
      display: 'flex',
      alignItems: 'center',
      padding: '10px 0',
      borderTop: '1px solid' + theme.palette.grey[300],
      borderBottom: '1px solid' + theme.palette.grey[300],
      backgroundColor: '#f5f5f5',
    },
    input: {
      '&::placeholder': {
        color: theme.palette.grey[500],
        fontSize: 14,
      },
      fontSize: 14,
    },
  });

type Props = {
  onSearch(value: string): void;
};

type State = {
  value: string;
};

class Search extends React.Component<Props & WithStyles<typeof styles>, State> {
  state = {
    value: '',
  };

  handleKeyPress = (event: React.KeyboardEvent) => {
    if (event.key === 'Enter') {
      this.props.onSearch(this.state.value);
    }
  };

  handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ value: event.target.value });
  };

  public render() {
    const { classes } = this.props;
    return (
      <div className={classes.container}>
        <SearchIcon className={this.props.classes.icon} />
        <InputBase
          type="text"
          classes={{ input: this.props.classes.input }}
          placeholder="Search"
          fullWidth={true}
          value={this.state.value}
          onChange={this.handleChange}
          onKeyPress={this.handleKeyPress}
        />
      </div>
    );
  }
}

export default withStyles(styles)(Search);
