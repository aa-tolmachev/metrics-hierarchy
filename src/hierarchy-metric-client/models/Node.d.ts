import { Coordinates } from '../models/Coordinates';
import { MetricShort } from '../models/MetricShort';
import { Relations } from '../models/Relations';
export declare class Node {
    'id'?: string;
    'metric'?: MetricShort;
    'coordinates'?: Coordinates;
    'relations'?: Array<Relations>;
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
