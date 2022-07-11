import { registerEnumType } from '@nestjs/graphql';

export enum AnimeThemeScalarFieldEnum {
    id = "id",
    malId = "malId",
    name = "name",
    animeIDs = "animeIDs"
}


registerEnumType(AnimeThemeScalarFieldEnum, { name: 'AnimeThemeScalarFieldEnum', description: undefined })
