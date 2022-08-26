import { registerEnumType } from '@nestjs/graphql';

export enum StaffScalarFieldEnum {
    id = "id",
    malId = "malId",
    characterIDs = "characterIDs"
}


registerEnumType(StaffScalarFieldEnum, { name: 'StaffScalarFieldEnum', description: undefined })
