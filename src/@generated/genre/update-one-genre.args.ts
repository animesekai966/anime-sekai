import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { GenreWhereUniqueInput } from './genre-where-unique.input';
import { Type } from 'class-transformer';

@ArgsType()
export class UpdateOneGenreArgs {

    @Field(() => GenreWhereUniqueInput, {nullable:false})
    @Type(() => GenreWhereUniqueInput)
    where!: GenreWhereUniqueInput;
}
