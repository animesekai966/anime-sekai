import { registerEnumType } from '@nestjs/graphql';

export enum AnimeDemographicScalarFieldEnum {
    id = "id",
    malId = "malId",
    name = "name",
    animeIDs = "animeIDs"
}


registerEnumType(AnimeDemographicScalarFieldEnum, { name: 'AnimeDemographicScalarFieldEnum', description: undefined })
