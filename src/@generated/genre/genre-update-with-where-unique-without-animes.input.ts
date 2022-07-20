import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { GenreWhereUniqueInput } from './genre-where-unique.input';
import { Type } from 'class-transformer';
import { GenreUpdateWithoutAnimesInput } from './genre-update-without-animes.input';

@InputType()
export class GenreUpdateWithWhereUniqueWithoutAnimesInput {

    @Field(() => GenreWhereUniqueInput, {nullable:false})
    @Type(() => GenreWhereUniqueInput)
    where!: GenreWhereUniqueInput;

    @Field(() => GenreUpdateWithoutAnimesInput, {nullable:false})
    @Type(() => GenreUpdateWithoutAnimesInput)
    data!: GenreUpdateWithoutAnimesInput;
}
