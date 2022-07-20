import { registerEnumType } from '@nestjs/graphql';

export enum CharactersOnAnimesScalarFieldEnum {
    id = "id",
    role = "role",
    characterId = "characterId",
    staffId = "staffId",
    animeId = "animeId"
}


registerEnumType(CharactersOnAnimesScalarFieldEnum, { name: 'CharactersOnAnimesScalarFieldEnum', description: undefined })
