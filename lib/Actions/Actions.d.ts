import * as React from 'react';
declare type Props<T> = {
    onEdit?: (data: T) => void;
    onDelete?: (data: T) => void;
    selected?: boolean;
    data: T;
};
declare class Actions<T> extends React.Component<Props<T>> {
    handleEdit: (event: React.MouseEvent<HTMLDivElement>) => void;
    handleDelete: () => void;
    render(): JSX.Element;
}
export default Actions;
