export declare class MetricCreate {
    'name': string;
    'state'?: string;
    'typeId'?: number;
    'rankId'?: number;
    'levelId'?: number | null;
    'platformId'?: number | null;
    'productId'?: number | null;
    'attractionChannelId'?: number | null;
    'valuePostfix'?: string;
    'description'?: string;
    'statusId'?: number;
    'nameCalculation'?: string;
    'label'?: string;
    'granularitiesIds'?: Array<number>;
    'dimensionsIds'?: Array<number>;
    'dataSource'?: string;
    'refToBoard'?: string;
    'queryExample'?: string;
    'ownerId'?: number | null;
    'analystId'?: number | null;
    'domainId'?: number | null;
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
