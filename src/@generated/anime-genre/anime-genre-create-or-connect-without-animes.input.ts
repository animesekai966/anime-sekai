import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AnimeGenreWhereUniqueInput } from './anime-genre-where-unique.input';
import { Type } from 'class-transformer';
import { AnimeGenreCreateWithoutAnimesInput } from './anime-genre-create-without-animes.input';

@InputType()
export class AnimeGenreCreateOrConnectWithoutAnimesInput {

    @Field(() => AnimeGenreWhereUniqueInput, {nullable:false})
    @Type(() => AnimeGenreWhereUniqueInput)
    where!: AnimeGenreWhereUniqueInput;

    @Field(() => AnimeGenreCreateWithoutAnimesInput, {nullable:false})
    @Type(() => AnimeGenreCreateWithoutAnimesInput)
    create!: AnimeGenreCreateWithoutAnimesInput;
}
