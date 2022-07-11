import { registerEnumType } from '@nestjs/graphql';

export enum BroadcastDays {
    MONDAYS = "MONDAYS",
    TUESDAYS = "TUESDAYS",
    WEDNESDAYS = "WEDNESDAYS",
    THURSDAYS = "THURSDAYS",
    FRIDAYS = "FRIDAYS",
    SATURDAYS = "SATURDAYS",
    SUNDAYS = "SUNDAYS"
}


registerEnumType(BroadcastDays, { name: 'BroadcastDays', description: undefined })
