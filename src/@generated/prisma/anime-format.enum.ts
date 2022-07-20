import { registerEnumType } from '@nestjs/graphql';

export enum AnimeFormat {
    TV = "TV",
    TV_SHORT = "TV_SHORT",
    MOVIE = "MOVIE",
    SPECIAL = "SPECIAL",
    OVA = "OVA",
    ONA = "ONA",
    MUSIC = "MUSIC",
    MANGA = "MANGA",
    NOVEL = "NOVEL",
    ONE_SHOT = "ONE_SHOT"
}


registerEnumType(AnimeFormat, { name: 'AnimeFormat', description: undefined })
