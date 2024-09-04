import { TypeConnectionEnum } from '../models/TypeConnectionEnum';
export declare class Relation {
    'id': number;
    'typeConnection': TypeConnectionEnum;
    'fromNode': number;
    'toNode': number;
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
