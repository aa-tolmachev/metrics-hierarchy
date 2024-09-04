import { NodeUpdateCoordinates } from '../models/NodeUpdateCoordinates';
import { Relations } from '../models/Relations';
export declare class NodeUpdate {
    'id'?: string;
    'metricId'?: number;
    'coordinates'?: NodeUpdateCoordinates;
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
