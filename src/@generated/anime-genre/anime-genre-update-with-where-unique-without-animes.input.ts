import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AnimeGenreWhereUniqueInput } from './anime-genre-where-unique.input';
import { Type } from 'class-transformer';
import { AnimeGenreUpdateWithoutAnimesInput } from './anime-genre-update-without-animes.input';

@InputType()
export class AnimeGenreUpdateWithWhereUniqueWithoutAnimesInput {

    @Field(() => AnimeGenreWhereUniqueInput, {nullable:false})
    @Type(() => AnimeGenreWhereUniqueInput)
    where!: AnimeGenreWhereUniqueInput;

    @Field(() => AnimeGenreUpdateWithoutAnimesInput, {nullable:false})
    @Type(() => AnimeGenreUpdateWithoutAnimesInput)
    data!: AnimeGenreUpdateWithoutAnimesInput;
}
