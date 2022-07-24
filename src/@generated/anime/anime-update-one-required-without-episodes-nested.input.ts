import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AnimeCreateWithoutEpisodesInput } from './anime-create-without-episodes.input';
import { Type } from 'class-transformer';
import { AnimeCreateOrConnectWithoutEpisodesInput } from './anime-create-or-connect-without-episodes.input';
import { AnimeUpsertWithoutEpisodesInput } from './anime-upsert-without-episodes.input';
import { AnimeWhereUniqueInput } from './anime-where-unique.input';
import { AnimeUpdateWithoutEpisodesInput } from './anime-update-without-episodes.input';

@InputType()
export class AnimeUpdateOneRequiredWithoutEpisodesNestedInput {

    @Field(() => AnimeCreateWithoutEpisodesInput, {nullable:true})
    @Type(() => AnimeCreateWithoutEpisodesInput)
    create?: AnimeCreateWithoutEpisodesInput;

    @Field(() => AnimeCreateOrConnectWithoutEpisodesInput, {nullable:true})
    @Type(() => AnimeCreateOrConnectWithoutEpisodesInput)
    connectOrCreate?: AnimeCreateOrConnectWithoutEpisodesInput;

    @Field(() => AnimeUpsertWithoutEpisodesInput, {nullable:true})
    @Type(() => AnimeUpsertWithoutEpisodesInput)
    upsert?: AnimeUpsertWithoutEpisodesInput;

    @Field(() => AnimeWhereUniqueInput, {nullable:true})
    @Type(() => AnimeWhereUniqueInput)
    connect?: AnimeWhereUniqueInput;

    @Field(() => AnimeUpdateWithoutEpisodesInput, {nullable:true})
    @Type(() => AnimeUpdateWithoutEpisodesInput)
    update?: AnimeUpdateWithoutEpisodesInput;
}
