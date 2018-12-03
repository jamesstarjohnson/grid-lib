import { Theme } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import styled from '../styled';

const StyledButton = styled(Button)(
  (theme: Theme) => ({
    paddingTop: 0,
    paddingBottom: 0,
    color: theme.palette.grey[700],
    textTransform: 'initial',
  }),
  { name: 'StyledTableCell' },
);

export default StyledButton;
