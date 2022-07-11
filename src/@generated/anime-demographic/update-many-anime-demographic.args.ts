import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { AnimeDemographicUpdateManyMutationInput } from './anime-demographic-update-many-mutation.input';
import { Type } from 'class-transformer';
import { AnimeDemographicWhereInput } from './anime-demographic-where.input';

@ArgsType()
export class UpdateManyAnimeDemographicArgs {

    @Field(() => AnimeDemographicUpdateManyMutationInput, {nullable:false})
    @Type(() => AnimeDemographicUpdateManyMutationInput)
    data!: AnimeDemographicUpdateManyMutationInput;

    @Field(() => AnimeDemographicWhereInput, {nullable:true})
    @Type(() => AnimeDemographicWhereInput)
    where?: AnimeDemographicWhereInput;
}
