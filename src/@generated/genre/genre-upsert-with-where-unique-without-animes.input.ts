import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { GenreWhereUniqueInput } from './genre-where-unique.input';
import { Type } from 'class-transformer';
import { GenreUpdateWithoutAnimesInput } from './genre-update-without-animes.input';
import { GenreCreateWithoutAnimesInput } from './genre-create-without-animes.input';

@InputType()
export class GenreUpsertWithWhereUniqueWithoutAnimesInput {

    @Field(() => GenreWhereUniqueInput, {nullable:false})
    @Type(() => GenreWhereUniqueInput)
    where!: GenreWhereUniqueInput;

    @Field(() => GenreUpdateWithoutAnimesInput, {nullable:false})
    @Type(() => GenreUpdateWithoutAnimesInput)
    update!: GenreUpdateWithoutAnimesInput;

    @Field(() => GenreCreateWithoutAnimesInput, {nullable:false})
    @Type(() => GenreCreateWithoutAnimesInput)
    create!: GenreCreateWithoutAnimesInput;
}
