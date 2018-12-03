import { Theme } from '@material-ui/core';
import Table from '@material-ui/core/Table';
import styled from '../styled';

const StyledTable = styled(Table)(
  (theme: Theme) => ({
    backgroundColor: 'white',
    minWidth: 700,
    border: `1px solid ${theme.palette.grey['300']}`,
  }),
  { name: 'StyledTable' },
);

export default StyledTable;
