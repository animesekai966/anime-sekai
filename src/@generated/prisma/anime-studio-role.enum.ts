import { registerEnumType } from '@nestjs/graphql';

export enum AnimeStudioRole {
    STUDIO = "STUDIO",
    PRODUCER = "PRODUCER",
    LICENSER = "LICENSER"
}


registerEnumType(AnimeStudioRole, { name: 'AnimeStudioRole', description: undefined })
