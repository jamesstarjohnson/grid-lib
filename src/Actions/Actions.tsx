import * as React from 'react';

import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import IconButton from '@material-ui/core/IconButton';
import Grid from '@material-ui/core/Grid';
import styled from '../styled';

type Props<T> = {
  onEdit?: (data: T) => void;
  onDelete?: (data: T) => void;
  selected?: boolean;
  data: T;
};

const IconStyled = styled(IconButton)(theme => ({
  color: '#2a5fed',
  transform: 'scale(0.9)',
}));

class Actions<T> extends React.Component<Props<T>> {
  handleEdit = (event: React.MouseEvent<HTMLDivElement>) => {
    event.stopPropagation();
    this.props.onEdit!(this.props.data);
  };

  handleDelete = (event: React.MouseEvent<HTMLDivElement>) => {
    event.stopPropagation();
    this.props.onDelete!(this.props.data);
  };

  render() {
    const { onDelete, onEdit, selected } = this.props;
    return (
      <Grid
        container={true}
        alignItems="center"
        style={{
          display: 'inline-flex',
          width: '100px',
          height: '35px',
          justifyContent: 'flex-end',
        }}
      >
        {onEdit && selected && (
          <Grid item={true} xs={4}>
            <IconStyled onClick={this.handleEdit}>
              <EditIcon />
            </IconStyled>
          </Grid>
        )}
        {onDelete && (
          <Grid item={true} xs={4}>
            <IconStyled onClick={this.handleDelete}>
              <DeleteIcon />
            </IconStyled>
          </Grid>
        )}
      </Grid>
    );
  }
}

export default Actions;
