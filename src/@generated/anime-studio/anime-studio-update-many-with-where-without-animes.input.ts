import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AnimeStudioScalarWhereInput } from './anime-studio-scalar-where.input';
import { Type } from 'class-transformer';
import { AnimeStudioUpdateManyMutationInput } from './anime-studio-update-many-mutation.input';

@InputType()
export class AnimeStudioUpdateManyWithWhereWithoutAnimesInput {

    @Field(() => AnimeStudioScalarWhereInput, {nullable:false})
    @Type(() => AnimeStudioScalarWhereInput)
    where!: AnimeStudioScalarWhereInput;

    @Field(() => AnimeStudioUpdateManyMutationInput, {nullable:false})
    @Type(() => AnimeStudioUpdateManyMutationInput)
    data!: AnimeStudioUpdateManyMutationInput;
}
