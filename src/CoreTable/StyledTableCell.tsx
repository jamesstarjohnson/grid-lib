import { Theme } from '@material-ui/core';
import TableCell from '@material-ui/core/TableCell';
import styled from '../styled';

const StyledTableCell = styled(TableCell)(
  (theme: Theme) => ({
    borderBottom: `1px solid ${theme.palette.grey[300]}`,
  }),
  { name: 'StyledTableCell' },
);

export default StyledTableCell;
