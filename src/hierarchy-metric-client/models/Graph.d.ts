import { MetricUser } from '../models/MetricUser';
import { Node } from '../models/Node';
export declare class Graph {
    'id'?: string;
    'name'?: string;
    'author'?: MetricUser | null;
    'nodes'?: Array<Node>;
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
