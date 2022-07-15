import { registerEnumType } from '@nestjs/graphql';

export enum ExternalSiteType {
    INFO = "INFO",
    STREAMING = "STREAMING",
    SOCIAL = "SOCIAL"
}


registerEnumType(ExternalSiteType, { name: 'ExternalSiteType', description: undefined })
