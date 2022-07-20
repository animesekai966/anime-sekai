import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { StudioUpdateManyMutationInput } from './studio-update-many-mutation.input';
import { Type } from 'class-transformer';
import { StudioWhereInput } from './studio-where.input';

@ArgsType()
export class UpdateManyStudioArgs {

    @Field(() => StudioUpdateManyMutationInput, {nullable:false})
    @Type(() => StudioUpdateManyMutationInput)
    data!: StudioUpdateManyMutationInput;

    @Field(() => StudioWhereInput, {nullable:true})
    @Type(() => StudioWhereInput)
    where?: StudioWhereInput;
}
