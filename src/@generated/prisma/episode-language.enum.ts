import { registerEnumType } from '@nestjs/graphql';

export enum EpisodeLanguage {
    AR = "AR",
    EN = "EN"
}


registerEnumType(EpisodeLanguage, { name: 'EpisodeLanguage', description: undefined })
