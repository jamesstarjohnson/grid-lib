import * as React from 'react';
import TableRow, { TableRowClassKey } from '@material-ui/core/TableRow';
import { createStyles, Theme, withStyles } from '@material-ui/core';

const styles = (theme: Theme) =>
  createStyles({
    root: {
      '&$selected': {
        backgroundColor: '#e5f2fe',
      },
      '&$hover:hover': {
        backgroundColor: theme.palette.grey[100],
      },
    },
    hover: {},
    selected: {},
    footer: {},
    head: {},
  });

type CoreTableRowProps = {
  hover: boolean;
  className?: string;
  index: number;
  selected: boolean;
  onSelect(index: number): void;
  classes: Partial<Record<TableRowClassKey, string>>;
};

const CoreTableRow: React.SFC<CoreTableRowProps> = ({
  selected,
  index,
  classes,
  hover,
  className,
  onSelect,
  children,
}) => {
  const handleSelect = () => {
    onSelect(index);
  };

  return (
    <TableRow
      hover={hover}
      selected={selected}
      classes={classes}
      className={className}
      onClick={handleSelect}
    >
      {children}
    </TableRow>
  );
};

export { CoreTableRowProps };

export default withStyles(styles)(CoreTableRow);
