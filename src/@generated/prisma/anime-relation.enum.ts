import { registerEnumType } from '@nestjs/graphql';

export enum AnimeRelation {
    ADAPTATION = "ADAPTATION",
    SEQUEL = "SEQUEL",
    PREQUEL = "PREQUEL",
    SIDE_STORY = "SIDE_STORY",
    SUMMARY = "SUMMARY",
    ALTERNATIVE = "ALTERNATIVE",
    OTHER = "OTHER",
    RECOMMENDATIONS = "RECOMMENDATIONS"
}


registerEnumType(AnimeRelation, { name: 'AnimeRelation', description: undefined })
