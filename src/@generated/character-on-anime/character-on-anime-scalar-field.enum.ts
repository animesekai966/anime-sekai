import { registerEnumType } from '@nestjs/graphql';

export enum CharacterOnAnimeScalarFieldEnum {
    id = "id",
    relationId = "relationId",
    role = "role",
    animeId = "animeId",
    staffId = "staffId",
    characterId = "characterId"
}


registerEnumType(CharacterOnAnimeScalarFieldEnum, { name: 'CharacterOnAnimeScalarFieldEnum', description: undefined })
