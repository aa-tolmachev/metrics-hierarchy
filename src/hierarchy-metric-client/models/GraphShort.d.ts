import { MetricUser } from '../models/MetricUser';
export declare class GraphShort {
    'id'?: string;
    'name'?: string;
    'author'?: MetricUser | null;
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
