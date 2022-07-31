import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StudioScalarWhereInput } from './studio-scalar-where.input';
import { Type } from 'class-transformer';
import { StudioUpdateManyMutationInput } from './studio-update-many-mutation.input';

@InputType()
export class StudioUpdateManyWithWhereWithoutAnimatedAnimeInput {

    @Field(() => StudioScalarWhereInput, {nullable:false})
    @Type(() => StudioScalarWhereInput)
    where!: StudioScalarWhereInput;

    @Field(() => StudioUpdateManyMutationInput, {nullable:false})
    @Type(() => StudioUpdateManyMutationInput)
    data!: StudioUpdateManyMutationInput;
}
