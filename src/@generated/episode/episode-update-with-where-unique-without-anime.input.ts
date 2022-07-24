import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EpisodeWhereUniqueInput } from './episode-where-unique.input';
import { Type } from 'class-transformer';
import { EpisodeUpdateWithoutAnimeInput } from './episode-update-without-anime.input';

@InputType()
export class EpisodeUpdateWithWhereUniqueWithoutAnimeInput {

    @Field(() => EpisodeWhereUniqueInput, {nullable:false})
    @Type(() => EpisodeWhereUniqueInput)
    where!: EpisodeWhereUniqueInput;

    @Field(() => EpisodeUpdateWithoutAnimeInput, {nullable:false})
    @Type(() => EpisodeUpdateWithoutAnimeInput)
    data!: EpisodeUpdateWithoutAnimeInput;
}
