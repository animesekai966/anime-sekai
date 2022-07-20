import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { GenreWhereInput } from './genre-where.input';

@InputType()
export class GenreListRelationFilter {

    @Field(() => GenreWhereInput, {nullable:true})
    every?: GenreWhereInput;

    @Field(() => GenreWhereInput, {nullable:true})
    some?: GenreWhereInput;

    @Field(() => GenreWhereInput, {nullable:true})
    none?: GenreWhereInput;
}
