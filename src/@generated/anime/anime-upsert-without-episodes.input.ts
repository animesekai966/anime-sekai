import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AnimeUpdateWithoutEpisodesInput } from './anime-update-without-episodes.input';
import { Type } from 'class-transformer';
import { AnimeCreateWithoutEpisodesInput } from './anime-create-without-episodes.input';

@InputType()
export class AnimeUpsertWithoutEpisodesInput {

    @Field(() => AnimeUpdateWithoutEpisodesInput, {nullable:false})
    @Type(() => AnimeUpdateWithoutEpisodesInput)
    update!: AnimeUpdateWithoutEpisodesInput;

    @Field(() => AnimeCreateWithoutEpisodesInput, {nullable:false})
    @Type(() => AnimeCreateWithoutEpisodesInput)
    create!: AnimeCreateWithoutEpisodesInput;
}
