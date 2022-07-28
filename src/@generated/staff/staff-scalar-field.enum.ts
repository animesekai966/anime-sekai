import { registerEnumType } from '@nestjs/graphql';

export enum StaffScalarFieldEnum {
    id = "id",
    malId = "malId",
    anilistId = "anilistId",
    info = "info"
}


registerEnumType(StaffScalarFieldEnum, { name: 'StaffScalarFieldEnum', description: undefined })
