import { registerEnumType } from '@nestjs/graphql';

export enum AnimeBroadcastDays {
    MONDAYS = "MONDAYS",
    TUESDAYS = "TUESDAYS",
    WEDNESDAYS = "WEDNESDAYS",
    THURSDAYS = "THURSDAYS",
    FRIDAYS = "FRIDAYS",
    SATURDAYS = "SATURDAYS",
    SUNDAYS = "SUNDAYS"
}


registerEnumType(AnimeBroadcastDays, { name: 'AnimeBroadcastDays', description: undefined })
