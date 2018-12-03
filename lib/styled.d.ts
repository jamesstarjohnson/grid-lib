import * as React from 'react';
import { Theme } from '@material-ui/core/styles';
import { WithStylesOptions, CSSProperties } from '@material-ui/core/styles/withStyles';
declare const styled: <T extends {}>(ComponentToStyle: React.ComponentType<T & {
    className?: string | undefined;
}>) => (style: CSSProperties | ((theme: Theme) => CSSProperties), options?: WithStylesOptions<"root"> | undefined) => React.ComponentType<Pick<any, string | number | symbol> & import("@material-ui/core").StyledComponentProps<"root">>;
export default styled;
