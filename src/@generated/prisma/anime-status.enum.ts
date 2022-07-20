import { registerEnumType } from '@nestjs/graphql';

export enum AnimeStatus {
    RELEASING = "RELEASING",
    NOT_YET_RELEASED = "NOT_YET_RELEASED",
    FINISHED = "FINISHED",
    CANCELLED = "CANCELLED",
    HIATUS = "HIATUS"
}


registerEnumType(AnimeStatus, { name: 'AnimeStatus', description: undefined })
