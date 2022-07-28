import { registerEnumType } from '@nestjs/graphql';

export enum CharacterScalarFieldEnum {
    id = "id",
    malId = "malId",
    anilistId = "anilistId"
}


registerEnumType(CharacterScalarFieldEnum, { name: 'CharacterScalarFieldEnum', description: undefined })
