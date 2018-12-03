import * as React from 'react';
export declare type LabelKind = 'Personalization' | 'Feed' | 'User Data';
declare type LabelProps = {
    kind: LabelKind;
};
declare const _default: React.ComponentType<Pick<LabelProps & {
    classes: Record<"title" | "paper" | "personalization" | "feed" | "userData", string>;
    innerRef?: ((instance: any) => void) | React.RefObject<any> | null | undefined;
} & {
    children?: React.ReactNode;
}, "children" | "kind"> & import("@material-ui/core").StyledComponentProps<"title" | "paper" | "personalization" | "feed" | "userData">>;
export default _default;
