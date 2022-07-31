import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { GenreScalarWhereInput } from './genre-scalar-where.input';
import { Type } from 'class-transformer';
import { GenreUpdateManyMutationInput } from './genre-update-many-mutation.input';

@InputType()
export class GenreUpdateManyWithWhereWithoutAnimeInput {

    @Field(() => GenreScalarWhereInput, {nullable:false})
    @Type(() => GenreScalarWhereInput)
    where!: GenreScalarWhereInput;

    @Field(() => GenreUpdateManyMutationInput, {nullable:false})
    @Type(() => GenreUpdateManyMutationInput)
    data!: GenreUpdateManyMutationInput;
}
