import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { GenreUpdateManyMutationInput } from './genre-update-many-mutation.input';
import { Type } from 'class-transformer';
import { GenreWhereInput } from './genre-where.input';

@ArgsType()
export class UpdateManyGenreArgs {

    @Field(() => GenreUpdateManyMutationInput, {nullable:false})
    @Type(() => GenreUpdateManyMutationInput)
    data!: GenreUpdateManyMutationInput;

    @Field(() => GenreWhereInput, {nullable:true})
    @Type(() => GenreWhereInput)
    where?: GenreWhereInput;
}
