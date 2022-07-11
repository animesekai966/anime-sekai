import { registerEnumType } from '@nestjs/graphql';

export enum AnimeScalarFieldEnum {
    id = "id",
    malId = "malId",
    anilistId = "anilistId",
    animeXId = "animeXId",
    banner = "banner",
    type = "type",
    duration = "duration",
    ageRating = "ageRating",
    season = "season",
    openings = "openings",
    endings = "endings",
    genreIDs = "genreIDs",
    studioIDs = "studioIDs"
}


registerEnumType(AnimeScalarFieldEnum, { name: 'AnimeScalarFieldEnum', description: undefined })
