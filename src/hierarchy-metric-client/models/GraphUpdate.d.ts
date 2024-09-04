import { NodeUpdate } from '../models/NodeUpdate';
export declare class GraphUpdate {
    'name'?: string;
    'authorId'?: number;
    'nodes'?: Array<NodeUpdate>;
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
