import { registerEnumType } from '@nestjs/graphql';

export enum AgeRating {
    G = "G",
    PG = "PG",
    PG13 = "PG13",
    R = "R",
    RP = "RP",
    RX = "RX"
}


registerEnumType(AgeRating, { name: 'AgeRating', description: undefined })
