import { registerEnumType } from '@nestjs/graphql';

export enum CharacterScalarFieldEnum {
    id = "id",
    malId = "malId",
    anilistId = "anilistId",
    description = "description",
    age = "age",
    gender = "gender",
    bloodType = "bloodType"
}


registerEnumType(CharacterScalarFieldEnum, { name: 'CharacterScalarFieldEnum', description: undefined })
