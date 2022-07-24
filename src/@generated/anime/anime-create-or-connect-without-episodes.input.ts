import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AnimeWhereUniqueInput } from './anime-where-unique.input';
import { Type } from 'class-transformer';
import { AnimeCreateWithoutEpisodesInput } from './anime-create-without-episodes.input';

@InputType()
export class AnimeCreateOrConnectWithoutEpisodesInput {

    @Field(() => AnimeWhereUniqueInput, {nullable:false})
    @Type(() => AnimeWhereUniqueInput)
    where!: AnimeWhereUniqueInput;

    @Field(() => AnimeCreateWithoutEpisodesInput, {nullable:false})
    @Type(() => AnimeCreateWithoutEpisodesInput)
    create!: AnimeCreateWithoutEpisodesInput;
}
