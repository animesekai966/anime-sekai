import { registerEnumType } from '@nestjs/graphql';

export enum AnimeSources {
    ANIME_X = "ANIME_X",
    ANIME_BLKOM = "ANIME_BLKOM",
    XS_ANIME = "XS_ANIME",
    ANIME_SLAYER = "ANIME_SLAYER"
}


registerEnumType(AnimeSources, { name: 'AnimeSources', description: undefined })
