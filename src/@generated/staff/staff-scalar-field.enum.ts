import { registerEnumType } from '@nestjs/graphql';

export enum StaffScalarFieldEnum {
    id = "id",
    malId = "malId",
    anilistId = "anilistId",
    language = "language",
    age = "age",
    gender = "gender",
    yearsActive = "yearsActive",
    homeTown = "homeTown",
    bloodType = "bloodType"
}


registerEnumType(StaffScalarFieldEnum, { name: 'StaffScalarFieldEnum', description: undefined })
