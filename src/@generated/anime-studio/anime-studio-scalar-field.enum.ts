import { registerEnumType } from '@nestjs/graphql';

export enum AnimeStudioScalarFieldEnum {
    id = "id",
    malId = "malId",
    role = "role",
    name = "name",
    animeIDs = "animeIDs"
}


registerEnumType(AnimeStudioScalarFieldEnum, { name: 'AnimeStudioScalarFieldEnum', description: undefined })
