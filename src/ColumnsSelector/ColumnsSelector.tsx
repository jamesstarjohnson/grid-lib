import * as React from 'react';
import ArrowDropDown from '@material-ui/icons/ArrowDropDown';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import TableAction from '../TableAction';
import StyledButton from './StyledButton';

type State = {
  anchorEl: any;
};

type Props<T> = {
  onChange(checkedMap: Record<keyof T, boolean>): void;
  columnsChecked: Record<keyof T, boolean>;
};

class ColumnsSelector<T> extends React.Component<Props<T>, State> {
  state: State = {
    anchorEl: null,
  };

  handleClick = (event: any) => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleClose = () => {
    this.setState({ anchorEl: null });
  };

  handleChange = (column: keyof T) => (event: any) => {
    this.props.onChange({
      ...(this.props.columnsChecked as any),
      [column]: event.target.checked,
    });
  };

  render() {
    const { anchorEl } = this.state;
    const { columnsChecked } = this.props;
    return (
      <React.Fragment>
        <TableAction>
          <StyledButton
            variant="outlined"
            aria-owns={anchorEl ? 'Columns' : undefined}
            aria-haspopup="true"
            onClick={this.handleClick}
          >
            Columns
            <ArrowDropDown />
          </StyledButton>
        </TableAction>
        <Menu
          id="columns-menu"
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={this.handleClose}
        >
          {Object.keys(columnsChecked).map(column => (
            <MenuItem key={column}>
              <FormControlLabel
                control={
                  <Checkbox
                    color="default"
                    checked={columnsChecked[column]}
                    onChange={this.handleChange(column as keyof T)}
                    value={column}
                  />
                }
                label={column}
              />
            </MenuItem>
          ))}
        </Menu>
      </React.Fragment>
    );
  }
}

export default ColumnsSelector;
