import { registerEnumType } from '@nestjs/graphql';

export enum AnimeStatus {
    FINISHED_AIRING = "FINISHED_AIRING",
    CURRENTLY_AIRING = "CURRENTLY_AIRING",
    NOT_YET_AIRED = "NOT_YET_AIRED"
}


registerEnumType(AnimeStatus, { name: 'AnimeStatus', description: undefined })
