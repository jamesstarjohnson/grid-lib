import * as React from 'react';
import classNames from 'classnames';

import { withStyles } from '@material-ui/core';
import { Theme } from '@material-ui/core/styles';
import {
  WithStylesOptions,
  ClassNameMap,
  CSSProperties,
} from '@material-ui/core/styles/withStyles';

const styled = <T extends {}>(
  ComponentToStyle: React.ComponentType<T & { className?: string }>,
) => (
  style: CSSProperties | ((theme: Theme) => CSSProperties),
  options?: WithStylesOptions<'root'>,
) => {
  const StyledComponent: React.SFC<
    {
      classes: ClassNameMap<'root'>;
      className?: string;
    } & any
  > = props => {
    const { classes, className, ...other } = props;

    return (
      <ComponentToStyle
        className={classNames(classes.root, className)}
        {...other}
      />
    );
  };

  const styles =
    typeof style === 'function'
      ? (theme: Theme) => ({ root: style(theme) })
      : { root: style };

  return withStyles(styles, options)(StyledComponent);
};

export default styled;
