import { registerEnumType } from '@nestjs/graphql';

export enum AnimeScalarFieldEnum {
    id = "id",
    malId = "malId",
    anilistId = "anilistId",
    animeXId = "animeXId",
    format = "format",
    status = "status",
    season = "season",
    episodesCount = "episodesCount",
    duration = "duration",
    countryOfOrigin = "countryOfOrigin",
    isLicensed = "isLicensed",
    isAdult = "isAdult",
    rating = "rating",
    source = "source",
    openings = "openings",
    endings = "endings",
    recommendations = "recommendations",
    updatedAt = "updatedAt",
    createdAt = "createdAt",
    producerIDs = "producerIDs",
    studioIDs = "studioIDs",
    genreIDs = "genreIDs"
}


registerEnumType(AnimeScalarFieldEnum, { name: 'AnimeScalarFieldEnum', description: undefined })
