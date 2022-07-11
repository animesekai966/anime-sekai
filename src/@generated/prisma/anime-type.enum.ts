import { registerEnumType } from '@nestjs/graphql';

export enum AnimeType {
    TV = "TV",
    ONA = "ONA",
    OVA = "OVA",
    SPECIAL = "SPECIAL",
    MOVIE = "MOVIE"
}


registerEnumType(AnimeType, { name: 'AnimeType', description: undefined })
