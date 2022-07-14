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
    source = "source",
    status = "status",
    episodesCount = "episodesCount",
    openings = "openings",
    endings = "endings",
    genreIDs = "genreIDs",
    studioIDs = "studioIDs",
    producerIDs = "producerIDs",
    createdAt = "createdAt",
    updatedAt = "updatedAt",
    episodesUpdatedAt = "episodesUpdatedAt"
}


registerEnumType(AnimeScalarFieldEnum, { name: 'AnimeScalarFieldEnum', description: undefined })
