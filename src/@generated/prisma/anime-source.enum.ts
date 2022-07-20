import { registerEnumType } from '@nestjs/graphql';

export enum AnimeSource {
    ORIGINAL = "ORIGINAL",
    MANGA = "MANGA",
    LIGHT_NOVEL = "LIGHT_NOVEL",
    VISUAL_NOVEL = "VISUAL_NOVEL",
    VIDEO_GAME = "VIDEO_GAME",
    OTHER = "OTHER",
    NOVEL = "NOVEL",
    DOUJINSHI = "DOUJINSHI",
    ANIME = "ANIME",
    WEB_NOVEL = "WEB_NOVEL",
    LIVE_ACTION = "LIVE_ACTION",
    GAME = "GAME",
    COMIC = "COMIC",
    MULTIMEDIA_PROJECT = "MULTIMEDIA_PROJECT",
    PICTURE_BOOK = "PICTURE_BOOK"
}


registerEnumType(AnimeSource, { name: 'AnimeSource', description: undefined })
