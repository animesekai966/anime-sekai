import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AnimeCreateWithoutEpisodesInput } from './anime-create-without-episodes.input';
import { Type } from 'class-transformer';
import { AnimeCreateOrConnectWithoutEpisodesInput } from './anime-create-or-connect-without-episodes.input';
import { AnimeWhereUniqueInput } from './anime-where-unique.input';

@InputType()
export class AnimeCreateNestedOneWithoutEpisodesInput {

    @Field(() => AnimeCreateWithoutEpisodesInput, {nullable:true})
    @Type(() => AnimeCreateWithoutEpisodesInput)
    create?: AnimeCreateWithoutEpisodesInput;

    @Field(() => AnimeCreateOrConnectWithoutEpisodesInput, {nullable:true})
    @Type(() => AnimeCreateOrConnectWithoutEpisodesInput)
    connectOrCreate?: AnimeCreateOrConnectWithoutEpisodesInput;

    @Field(() => AnimeWhereUniqueInput, {nullable:true})
    @Type(() => AnimeWhereUniqueInput)
    connect?: AnimeWhereUniqueInput;
}
