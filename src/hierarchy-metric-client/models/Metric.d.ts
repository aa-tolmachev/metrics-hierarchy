import { AttractionChannel } from '../models/AttractionChannel';
import { DimensionInner } from '../models/DimensionInner';
import { Domain } from '../models/Domain';
import { GranularityInner } from '../models/GranularityInner';
import { GraphShort } from '../models/GraphShort';
import { Level } from '../models/Level';
import { MetricUser } from '../models/MetricUser';
import { Platform } from '../models/Platform';
import { Product } from '../models/Product';
import { Rank } from '../models/Rank';
import { Status } from '../models/Status';
import { Type } from '../models/Type';
export declare class Metric {
    'id': number;
    'name': string;
    'state': string;
    'label': string;
    'level': Level | null;
    'platform': Platform | null;
    'product': Product | null;
    'attractionChannel': AttractionChannel | null;
    'type': Type | null;
    'rank': Rank;
    'value': number;
    'dynamics': number;
    'valuePostfix': string;
    'description': string;
    'status': Status | null;
    'nameCalculation': string;
    'granularities': Array<GranularityInner>;
    'dimensions': Array<DimensionInner>;
    'dataSource': string;
    'refToBoard': string;
    'queryExample': string;
    'owner': MetricUser | null;
    'analyst': MetricUser | null;
    'domain': Domain | null;
    'graphs'?: Array<GraphShort>;
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