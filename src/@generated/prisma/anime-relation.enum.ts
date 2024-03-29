import { registerEnumType } from '@nestjs/graphql';

export enum AnimeRelation {
    ADAPTATION = "ADAPTATION",
    PREQUEL = "PREQUEL",
    SEQUEL = "SEQUEL",
    PARENT = "PARENT",
    SIDE_STORY = "SIDE_STORY",
    CHARACTER = "CHARACTER",
    SUMMARY = "SUMMARY",
    ALTERNATIVE = "ALTERNATIVE",
    SPIN_OFF = "SPIN_OFF",
    OTHER = "OTHER",
    SOURCE = "SOURCE",
    COMPILATION = "COMPILATION",
    CONTAINS = "CONTAINS",
    RECOMMENDATION = "RECOMMENDATION",
    MIXED_MEDIA = "MIXED_MEDIA"
}


registerEnumType(AnimeRelation, { name: 'AnimeRelation', description: undefined })
