import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EpisodeCreateManyAnimeInput } from './episode-create-many-anime.input';
import { Type } from 'class-transformer';

@InputType()
export class EpisodeCreateManyAnimeInputEnvelope {

    @Field(() => [EpisodeCreateManyAnimeInput], {nullable:false})
    @Type(() => EpisodeCreateManyAnimeInput)
    data!: Array<EpisodeCreateManyAnimeInput>;
}
