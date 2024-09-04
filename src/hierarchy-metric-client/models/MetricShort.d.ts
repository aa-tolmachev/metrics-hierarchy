import { Domain } from '../models/Domain';
import { MetricUser } from '../models/MetricUser';
import { Status } from '../models/Status';
export declare class MetricShort {
    'id'?: number;
    'name'?: string;
    'value'?: number;
    'dynamics'?: number;
    'valuePostfix'?: string;
    'domain'?: Domain | null;
    'status'?: Status | null;
    'owner'?: MetricUser | null;
    static readonly discriminator: string | undefined;
    static readonly attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
        format: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
        format: string;
    }[];
    constructor();
}
