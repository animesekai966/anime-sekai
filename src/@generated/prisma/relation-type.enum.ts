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
    RECOMMENDATION = "RECOMMENDATION",
    CHARACTER = "CHARACTER",
    ALTERNATIVE_SETTING = "ALTERNATIVE_SETTING",
    SPIN_OFF = "SPIN_OFF",
    FULL_STORY = "FULL_STORY"
}


registerEnumType(RelationType, { name: 'RelationType', description: undefined })
