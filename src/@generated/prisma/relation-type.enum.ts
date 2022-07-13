import { registerEnumType } from '@nestjs/graphql';

export enum RelationType {
    ADAPTATION = "ADAPTATION",
    SEQUEL = "SEQUEL",
    PREQUEL = "PREQUEL",
    SIDE_STORY = "SIDE_STORY",
    SUMMARY = "SUMMARY",
    ALTERNATIVE_VERSION = "ALTERNATIVE_VERSION",
    OTHER = "OTHER",
    PARENT_STORY = "PARENT_STORY",
    RECOMMENDATION = "RECOMMENDATION"
}


registerEnumType(RelationType, { name: 'RelationType', description: undefined })
