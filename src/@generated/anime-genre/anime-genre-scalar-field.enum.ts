import { registerEnumType } from '@nestjs/graphql';

export enum AnimeGenreScalarFieldEnum {
    id = "id",
    malId = "malId",
    name = "name",
    type = "type",
    animeIDs = "animeIDs"
}


registerEnumType(AnimeGenreScalarFieldEnum, { name: 'AnimeGenreScalarFieldEnum', description: undefined })
