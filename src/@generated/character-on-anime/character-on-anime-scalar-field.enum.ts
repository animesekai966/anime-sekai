import { registerEnumType } from '@nestjs/graphql';

export enum CharacterOnAnimeScalarFieldEnum {
    id = "id",
    role = "role",
    animeId = "animeId",
    staffId = "staffId"
}


registerEnumType(CharacterOnAnimeScalarFieldEnum, { name: 'CharacterOnAnimeScalarFieldEnum', description: undefined })
