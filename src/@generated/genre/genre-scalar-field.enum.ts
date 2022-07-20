import { registerEnumType } from '@nestjs/graphql';

export enum GenreScalarFieldEnum {
    id = "id",
    malId = "malId",
    name = "name",
    type = "type",
    animeIDs = "animeIDs"
}


registerEnumType(GenreScalarFieldEnum, { name: 'GenreScalarFieldEnum', description: undefined })
