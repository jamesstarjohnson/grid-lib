import * as React from 'react';
import { WithStyles, createStyles, withStyles, Theme } from '@material-ui/core';
import classnames from 'classnames';
import SearchIcon from '@material-ui/icons/Search';
import InputAdornment from '@material-ui/core/InputAdornment';
import TextField from '@material-ui/core/TextField';
import TableAction from '../TableAction';

const styles = (theme: Theme) =>
  createStyles({
    inputContainer: {
      flexDirection: 'initial',
      backgroundColor: 'white',
    },
    input: {
      paddingLeft: 10,
    },
    searchIcon: {
      color: `${theme.palette.grey[300]}`,
    },
  });

type Props = {
  onChange(value: string): void;
  searchValue: string | undefined;
  className?: string;
};

class Search extends React.Component<Props & WithStyles<typeof styles>> {
  handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.props.onChange(event.target.value);
  };

  public render() {
    const { classes, searchValue, className } = this.props;
    return (
      <TableAction>
        <TextField
          defaultValue={searchValue}
          label={false}
          inputProps={{ className: classes.input }}
          InputProps={{
            disableUnderline: true,
            endAdornment: (
              <InputAdornment position="start">
                <SearchIcon color="disabled" className={classes.searchIcon} />
              </InputAdornment>
            ),
          }}
          className={classnames(classes.inputContainer, className)}
          onChange={this.handleChange}
        />
      </TableAction>
    );
  }
}

export default withStyles(styles)(Search);
