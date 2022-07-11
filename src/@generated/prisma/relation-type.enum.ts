import { registerEnumType } from '@nestjs/graphql';

export enum RelationType {
    ANIME = "ANIME",
    MANGA = "MANGA"
}


registerEnumType(RelationType, { name: 'RelationType', description: undefined })
