import { registerEnumType } from '@nestjs/graphql';

export enum ExternalLinkType {
    INFO = "INFO",
    STREAMING = "STREAMING",
    SOCIAL = "SOCIAL",
    OTHER = "OTHER"
}


registerEnumType(ExternalLinkType, { name: 'ExternalLinkType', description: undefined })
