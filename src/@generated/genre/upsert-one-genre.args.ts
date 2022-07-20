import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { GenreWhereUniqueInput } from './genre-where-unique.input';
import { Type } from 'class-transformer';
import { GenreCreateInput } from './genre-create.input';
import { GenreUpdateInput } from './genre-update.input';

@ArgsType()
export class UpsertOneGenreArgs {

    @Field(() => GenreWhereUniqueInput, {nullable:false})
    @Type(() => GenreWhereUniqueInput)
    where!: GenreWhereUniqueInput;

    @Field(() => GenreCreateInput, {nullable:false})
    @Type(() => GenreCreateInput)
    create!: GenreCreateInput;

    @Field(() => GenreUpdateInput, {nullable:false})
    @Type(() => GenreUpdateInput)
    update!: GenreUpdateInput;
}
