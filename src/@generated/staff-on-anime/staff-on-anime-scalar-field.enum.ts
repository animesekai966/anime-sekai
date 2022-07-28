import { registerEnumType } from '@nestjs/graphql';

export enum StaffOnAnimeScalarFieldEnum {
    id = "id",
    role = "role",
    animeId = "animeId",
    staffId = "staffId"
}


registerEnumType(StaffOnAnimeScalarFieldEnum, { name: 'StaffOnAnimeScalarFieldEnum', description: undefined })
