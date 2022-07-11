import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AnimeGenreScalarWhereInput } from './anime-genre-scalar-where.input';
import { Type } from 'class-transformer';
import { AnimeGenreUpdateManyMutationInput } from './anime-genre-update-many-mutation.input';

@InputType()
export class AnimeGenreUpdateManyWithWhereWithoutAnimesInput {

    @Field(() => AnimeGenreScalarWhereInput, {nullable:false})
    @Type(() => AnimeGenreScalarWhereInput)
    where!: AnimeGenreScalarWhereInput;

    @Field(() => AnimeGenreUpdateManyMutationInput, {nullable:false})
    @Type(() => AnimeGenreUpdateManyMutationInput)
    data!: AnimeGenreUpdateManyMutationInput;
}
