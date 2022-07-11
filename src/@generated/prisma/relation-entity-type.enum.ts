import { registerEnumType } from '@nestjs/graphql';

export enum RelationEntityType {
    ANIME = "ANIME",
    MANGA = "MANGA"
}


registerEnumType(RelationEntityType, { name: 'RelationEntityType', description: undefined })
