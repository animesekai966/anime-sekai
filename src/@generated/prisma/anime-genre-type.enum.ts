import { registerEnumType } from '@nestjs/graphql';

export enum AnimeGenreType {
    GENRE = "GENRE",
    EXPLICIT_GENRE = "EXPLICIT_GENRE",
    THEME = "THEME",
    DEMOGRAPHIC = "DEMOGRAPHIC"
}


registerEnumType(AnimeGenreType, { name: 'AnimeGenreType', description: undefined })
