import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EpisodeWhereUniqueInput } from './episode-where-unique.input';
import { Type } from 'class-transformer';
import { EpisodeUpdateWithoutAnimeInput } from './episode-update-without-anime.input';
import { EpisodeCreateWithoutAnimeInput } from './episode-create-without-anime.input';

@InputType()
export class EpisodeUpsertWithWhereUniqueWithoutAnimeInput {

    @Field(() => EpisodeWhereUniqueInput, {nullable:false})
    @Type(() => EpisodeWhereUniqueInput)
    where!: EpisodeWhereUniqueInput;

    @Field(() => EpisodeUpdateWithoutAnimeInput, {nullable:false})
    @Type(() => EpisodeUpdateWithoutAnimeInput)
    update!: EpisodeUpdateWithoutAnimeInput;

    @Field(() => EpisodeCreateWithoutAnimeInput, {nullable:false})
    @Type(() => EpisodeCreateWithoutAnimeInput)
    create!: EpisodeCreateWithoutAnimeInput;
}
