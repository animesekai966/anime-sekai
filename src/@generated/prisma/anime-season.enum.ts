import { registerEnumType } from '@nestjs/graphql';

export enum AnimeSeason {
    WINTER = "WINTER",
    FALL = "FALL",
    SUMMER = "SUMMER",
    SPRING = "SPRING"
}


registerEnumType(AnimeSeason, { name: 'AnimeSeason', description: undefined })
