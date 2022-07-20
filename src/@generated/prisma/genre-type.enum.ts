import { registerEnumType } from '@nestjs/graphql';

export enum GenreType {
    GENRE = "GENRE",
    EXPLICIT_GENRE = "EXPLICIT_GENRE",
    THEME = "THEME",
    DEMOGRAPHIC = "DEMOGRAPHIC"
}


registerEnumType(GenreType, { name: 'GenreType', description: undefined })
