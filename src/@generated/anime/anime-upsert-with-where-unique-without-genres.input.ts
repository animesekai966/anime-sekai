import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AnimeWhereUniqueInput } from './anime-where-unique.input';
import { Type } from 'class-transformer';
import { AnimeUpdateWithoutGenresInput } from './anime-update-without-genres.input';
import { AnimeCreateWithoutGenresInput } from './anime-create-without-genres.input';

@InputType()
export class AnimeUpsertWithWhereUniqueWithoutGenresInput {

    @Field(() => AnimeWhereUniqueInput, {nullable:false})
    @Type(() => AnimeWhereUniqueInput)
    where!: AnimeWhereUniqueInput;

    @Field(() => AnimeUpdateWithoutGenresInput, {nullable:false})
    @Type(() => AnimeUpdateWithoutGenresInput)
    update!: AnimeUpdateWithoutGenresInput;

    @Field(() => AnimeCreateWithoutGenresInput, {nullable:false})
    @Type(() => AnimeCreateWithoutGenresInput)
    create!: AnimeCreateWithoutGenresInput;
}
