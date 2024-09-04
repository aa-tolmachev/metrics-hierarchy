export declare class Relations {
    'id'?: string;
    'typeConnection'?: RelationsTypeConnectionEnum;
    'fromNode'?: string;
    'toNode'?: string;
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
export declare enum RelationsTypeConnectionEnum {
    Hard = "hard",
    Soft = "soft"
}
