import { registerEnumType } from '@nestjs/graphql';

export enum AnimeScalarFieldEnum {
    id = "id"
}


registerEnumType(AnimeScalarFieldEnum, { name: 'AnimeScalarFieldEnum', description: undefined })
