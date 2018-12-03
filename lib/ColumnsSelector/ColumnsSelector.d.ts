import * as React from 'react';
declare type State = {
    anchorEl: any;
};
declare type Props<T> = {
    onChange(columnsChecked: Record<keyof T, boolean>): void;
    columnsChecked: Record<keyof T, boolean>;
    columnIds: Array<keyof T>;
};
declare class ColumnsSelector<T> extends React.Component<Props<T>, State> {
    state: State;
    handleClick: (event: any) => void;
    handleClose: () => void;
    handleChange: (column: keyof T) => (event: any) => void;
    render(): JSX.Element;
}
export default ColumnsSelector;
