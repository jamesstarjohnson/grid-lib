import Paper from '@material-ui/core/Paper';
import styled from '../styled';

const StyledPaper = styled(Paper)(
  theme => ({
    width: '100%',
    overflowX: 'auto',
    boxShadow: 'initial',
  }),
  { name: 'StyledPaper' },
);

export default StyledPaper;
