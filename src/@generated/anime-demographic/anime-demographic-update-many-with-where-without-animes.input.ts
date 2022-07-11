import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AnimeDemographicScalarWhereInput } from './anime-demographic-scalar-where.input';
import { Type } from 'class-transformer';
import { AnimeDemographicUpdateManyMutationInput } from './anime-demographic-update-many-mutation.input';

@InputType()
export class AnimeDemographicUpdateManyWithWhereWithoutAnimesInput {

    @Field(() => AnimeDemographicScalarWhereInput, {nullable:false})
    @Type(() => AnimeDemographicScalarWhereInput)
    where!: AnimeDemographicScalarWhereInput;

    @Field(() => AnimeDemographicUpdateManyMutationInput, {nullable:false})
    @Type(() => AnimeDemographicUpdateManyMutationInput)
    data!: AnimeDemographicUpdateManyMutationInput;
}
