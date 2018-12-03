export { default } from './CustomTable';
import { LabelKind } from '../Label';
export declare type Data = {
    name: string;
    key: string;
    acl: LabelKind[];
    created: Date;
    helperText?: Partial<{
        [key in keyof Data]: string;
    }>;
};
