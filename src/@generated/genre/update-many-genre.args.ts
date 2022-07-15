import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { GenreWhereInput } from './genre-where.input';
import { Type } from 'class-transformer';

@ArgsType()
export class UpdateManyGenreArgs {

    @Field(() => GenreWhereInput, {nullable:true})
    @Type(() => GenreWhereInput)
    where?: GenreWhereInput;
}
