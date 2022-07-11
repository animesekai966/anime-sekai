import { registerEnumType } from '@nestjs/graphql';

export enum AnimeStudioType {
    STUDIO = "STUDIO",
    PRODUCER = "PRODUCER",
    LICENSER = "LICENSER"
}


registerEnumType(AnimeStudioType, { name: 'AnimeStudioType', description: undefined })
