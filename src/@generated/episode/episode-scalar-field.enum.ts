import { registerEnumType } from '@nestjs/graphql';

export enum EpisodeScalarFieldEnum {
    id = "id",
    number = "number",
    name = "name",
    source = "source",
    filler = "filler",
    last = "last",
    language = "language",
    updatedAt = "updatedAt",
    createdAt = "createdAt",
    animeId = "animeId"
}


registerEnumType(EpisodeScalarFieldEnum, { name: 'EpisodeScalarFieldEnum', description: undefined })
