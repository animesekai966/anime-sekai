import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AnimeGenreWhereUniqueInput } from './anime-genre-where-unique.input';
import { Type } from 'class-transformer';
import { AnimeGenreUpdateWithoutAnimesInput } from './anime-genre-update-without-animes.input';
import { AnimeGenreCreateWithoutAnimesInput } from './anime-genre-create-without-animes.input';

@InputType()
export class AnimeGenreUpsertWithWhereUniqueWithoutAnimesInput {

    @Field(() => AnimeGenreWhereUniqueInput, {nullable:false})
    @Type(() => AnimeGenreWhereUniqueInput)
    where!: AnimeGenreWhereUniqueInput;

    @Field(() => AnimeGenreUpdateWithoutAnimesInput, {nullable:false})
    @Type(() => AnimeGenreUpdateWithoutAnimesInput)
    update!: AnimeGenreUpdateWithoutAnimesInput;

    @Field(() => AnimeGenreCreateWithoutAnimesInput, {nullable:false})
    @Type(() => AnimeGenreCreateWithoutAnimesInput)
    create!: AnimeGenreCreateWithoutAnimesInput;
}
