import { registerEnumType } from '@nestjs/graphql';

export enum StudioScalarFieldEnum {
    id = "id",
    malId = "malId",
    name = "name",
    animatedAnimeIDs = "animatedAnimeIDs",
    producedAnimeIDs = "producedAnimeIDs"
}


registerEnumType(StudioScalarFieldEnum, { name: 'StudioScalarFieldEnum', description: undefined })
