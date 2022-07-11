import { registerEnumType } from '@nestjs/graphql';

export enum AnimeStudioScalarFieldEnum {
    id = "id",
    malId = "malId",
    type = "type",
    name = "name",
    animeIDs = "animeIDs"
}


registerEnumType(AnimeStudioScalarFieldEnum, { name: 'AnimeStudioScalarFieldEnum', description: undefined })
