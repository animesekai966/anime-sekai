import { registerEnumType } from '@nestjs/graphql';

export enum CharacterScalarFieldEnum {
    id = "id",
    malId = "malId"
}


registerEnumType(CharacterScalarFieldEnum, { name: 'CharacterScalarFieldEnum', description: undefined })
