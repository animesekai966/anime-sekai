import { registerEnumType } from '@nestjs/graphql';

export enum BroadcastDays {
    MONDAY = "MONDAY",
    TUESDAY = "TUESDAY",
    WEDNESDAY = "WEDNESDAY",
    THURSDAY = "THURSDAY",
    FRIDAY = "FRIDAY",
    SATURDAY = "SATURDAY",
    SUNDAY = "SUNDAY"
}


registerEnumType(BroadcastDays, { name: 'BroadcastDays', description: undefined })
