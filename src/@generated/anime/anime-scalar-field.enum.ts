import { registerEnumType } from '@nestjs/graphql';

export enum AnimeScalarFieldEnum {
    id = "id",
    slug = "slug",
    malId = "malId",
    anilistId = "anilistId",
    animeifyId = "animeifyId",
    animeSlayerId = "animeSlayerId",
    xsAnimeId = "xsAnimeId",
    animeBlkomId = "animeBlkomId",
    banner = "banner",
    format = "format",
    status = "status",
    season = "season",
    episodesCount = "episodesCount",
    duration = "duration",
    countryOfOrigin = "countryOfOrigin",
    isLicensed = "isLicensed",
    isAdult = "isAdult",
    source = "source",
    openings = "openings",
    endings = "endings",
    updatedAt = "updatedAt",
    createdAt = "createdAt",
    producerIDs = "producerIDs",
    studioIDs = "studioIDs",
    genreIDs = "genreIDs"
}


registerEnumType(AnimeScalarFieldEnum, { name: 'AnimeScalarFieldEnum', description: undefined })
