import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AnimeScalarWhereInput } from './anime-scalar-where.input';
import { Type } from 'class-transformer';
import { AnimeUpdateManyMutationInput } from './anime-update-many-mutation.input';

@InputType()
export class AnimeUpdateManyWithWhereWithoutGenresInput {

    @Field(() => AnimeScalarWhereInput, {nullable:false})
    @Type(() => AnimeScalarWhereInput)
    where!: AnimeScalarWhereInput;

    @Field(() => AnimeUpdateManyMutationInput, {nullable:false})
    @Type(() => AnimeUpdateManyMutationInput)
    data!: AnimeUpdateManyMutationInput;
}
