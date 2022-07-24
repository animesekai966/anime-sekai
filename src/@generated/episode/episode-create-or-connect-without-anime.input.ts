import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EpisodeWhereUniqueInput } from './episode-where-unique.input';
import { Type } from 'class-transformer';
import { EpisodeCreateWithoutAnimeInput } from './episode-create-without-anime.input';

@InputType()
export class EpisodeCreateOrConnectWithoutAnimeInput {

    @Field(() => EpisodeWhereUniqueInput, {nullable:false})
    @Type(() => EpisodeWhereUniqueInput)
    where!: EpisodeWhereUniqueInput;

    @Field(() => EpisodeCreateWithoutAnimeInput, {nullable:false})
    @Type(() => EpisodeCreateWithoutAnimeInput)
    create!: EpisodeCreateWithoutAnimeInput;
}
