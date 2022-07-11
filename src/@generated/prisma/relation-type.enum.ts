import { registerEnumType } from '@nestjs/graphql';

export enum RelationType {
    ADAPTATION = "ADAPTATION",
    SEQUEL = "SEQUEL",
    PREQUEL = "PREQUEL",
    SIDE_STORY = "SIDE_STORY",
    SUMMARY = "SUMMARY",
    ALTERNATIVE = "ALTERNATIVE",
    OTHER = "OTHER",
    RECOMMENDATION = "RECOMMENDATION"
}


registerEnumType(RelationType, { name: 'RelationType', description: undefined })
