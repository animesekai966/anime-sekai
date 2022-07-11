import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AnimeDemographicWhereInput } from './anime-demographic-where.input';

@InputType()
export class AnimeDemographicListRelationFilter {

    @Field(() => AnimeDemographicWhereInput, {nullable:true})
    every?: AnimeDemographicWhereInput;

    @Field(() => AnimeDemographicWhereInput, {nullable:true})
    some?: AnimeDemographicWhereInput;

    @Field(() => AnimeDemographicWhereInput, {nullable:true})
    none?: AnimeDemographicWhereInput;
}
