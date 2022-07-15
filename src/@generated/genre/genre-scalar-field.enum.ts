import { registerEnumType } from '@nestjs/graphql';

export enum GenreScalarFieldEnum {
    id = "id"
}


registerEnumType(GenreScalarFieldEnum, { name: 'GenreScalarFieldEnum', description: undefined })
