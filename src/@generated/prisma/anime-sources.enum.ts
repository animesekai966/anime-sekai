import { registerEnumType } from '@nestjs/graphql';

export enum AnimeSources {
    ANIME_X = "ANIME_X",
    ANIME_BLKOM = "ANIME_BLKOM"
}


registerEnumType(AnimeSources, { name: 'AnimeSources', description: undefined })
